// URLs para os sons das notas (você pode usar seus próprios arquivos .mp3 ou .wav)
const sounds = {
​ ​ C:      'https://cdn.pixabay.com/audio/2022/07/26/audio_12c4b2b14d.mp3',
​ ​ Csharp: 'https://cdn.pixabay.com/audio/2022/07/26/audio_12c4b2b14d.mp3',
​ ​ D:      'https://cdn.pixabay.com/audio/2022/07/26/audio_12c4b2b14d.mp3',
​ ​ Dsharp: 'https://cdn.pixabay.com/audio/2022/07/26/audio_12c4b2b14d.mp3',
​ ​ E:      'https://cdn.pixabay.com/audio/2022/07/26/audio_12c4b2b14d.mp3',
​ ​ F:      'https://cdn.pixabay.com/audio/2022/07/26/audio_12c4b2b14d.mp3',
​ ​ Fsharp: 'https://cdn.pixabay.com/audio/2022/07/26/audio_12c4b2b14d.mp3',
​ ​ G:      'https://cdn.pixabay.com/audio/2022/07/26/audio_12c4b2b14d.mp3',
​ ​ Gsharp: 'https://cdn.pixabay.com/audio/2022/07/26/audio_12c4b2b14d.mp3',
​ ​ A:      'https://cdn.pixabay.com/audio/2022/07/26/audio_12c4b2b14d.mp3',
​ ​ Asharp: 'https://cdn.pixabay.com/audio/2022/07/26/audio_12c4b2b14d.mp3',
​ ​ B:      'https://cdn.pixabay.com/audio/2022/07/26/audio_12c4b2b14d.mp3',
};

document.querySelectorAll('.key').forEach(key => {
​ ​ key.addEventListener('click', () => playNote(key));
});

function playNote(key) {
​ ​ const note = key.dataset.note;
​ ​ if (!sounds[note]) return;
​ ​ key.classList.add('playing');
​ ​ const audio = new Audio(sounds[note]);
​ ​ audio.currentTime = 0;
​ ​ audio.play();
​ ​ audio.onended = () => key.classList.remove('playing');
}

// Extra: tocar pelo teclado
window.addEventListener('keydown', e => {
​ ​ const keyMap = {
​ ​ ​ ​ 'a': 'C', 'w': 'Csharp', 's': 'D', 'e': 'Dsharp', 'd': 'E',
​ ​ ​ ​ 'f': 'F', 't': 'Fsharp', 'g': 'G', 'y': 'Gsharp', 'h': 'A',
​ ​ ​ ​ 'u': 'Asharp', 'j': 'B'
​ ​ };
​ ​ const note = keyMap[e.key.toLowerCase()];
​ ​ if (note) {
​ ​ ​ ​ const keyBtn = document.querySelector(`.key[data-note="${note}"]`);
​ ​ ​ ​ if (keyBtn) playNote(keyBtn);
​ ​ }
});
