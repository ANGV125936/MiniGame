import { currentWordData, changeDifficulty } from './game_logic.js';

let score = 0;
let wordsUsed = new Set();
let wordsPerLevel = 5;
let levels = ['easy', 'medium', 'hard', 'nearlyImpossible'];
let currentLevelIndex = 0;

// Música de fondo
let backgroundMusic;

function getRandomTrack() {
    const musicTracks = [
        'music/music_west1.mp3',
        'music/music_west2.mp3',
        'music/music_west3.mp3',
        'music/music_west4.mp3',
        'music/music_west5.mp3',
        'music/music_west6.mp3'
    ];
    const randomIndex = Math.floor(Math.random() * musicTracks.length);
    return musicTracks[randomIndex];
}

function playBackgroundMusic() {
    backgroundMusic = new Audio(getRandomTrack());
    backgroundMusic.loop = true; // Reproducir en bucle
    backgroundMusic.play();

    // Cambiar a la siguiente canción cuando termine la actual
    backgroundMusic.addEventListener('ended', () => {
        backgroundMusic.src = getRandomTrack();
        backgroundMusic.play();
    });
}

// Efectos de sonido
function playSoundEffect(soundFile) {
    const sound = new Audio(soundFile);
    sound.play();
}

// Mostrar aviso visual
function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;

    // Agregar el aviso al cuerpo del documento
    document.body.appendChild(notification);

    // Eliminar el aviso después de 3 segundos
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}

function startGame() {
    const playerName = document.getElementById('playerName').value;
    if (!playerName) {
        showNotification('¡Introduce tu nombre para iniciar a jugar!');
        return;
    }

    // Reproducir sonido de inicio
    playSoundEffect('music/horse.mp3');

    // Iniciar música de fondo
    playBackgroundMusic();

    document.getElementById('playerDisplayName').textContent = `Jugador: ${playerName}`;
    document.getElementById('gameContainer').classList.remove('hidden');
    nextWord();
    updateGameDisplay();

    // Generar el teclado virtual
    generateVirtualKeyboard();
}

function generateVirtualKeyboard() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const rows = [
        document.getElementById('row1'),
        document.getElementById('row2'),
        document.getElementById('row3')
    ];

    rows.forEach(row => row.innerHTML = ''); // Limpiar filas antes de agregar botones

    const lettersPerRow = 10;
    letters.split('').forEach((letter, i) => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.classList.add('default');
        button.addEventListener('click', () => handleLetterClick(button));
        rows[Math.floor(i / lettersPerRow)].appendChild(button);
    });
}

function handleLetterClick(button) {
    const isCorrect = currentWordData.word.toUpperCase().includes(button.textContent);

    // Reproducir sonido de letra correcta o incorrecta
    if (isCorrect) {
        playSoundEffect('music/Correct_key.mp3');
    } else {
        playSoundEffect('music/Invalid_key.mp3');
    }

    button.classList.remove('default');
    button.classList.add(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
        animateWord(button.textContent); // Animar la letra correcta en la palabra
        checkWin();
    }
}

function animateWord(letter) {
    const wordContainer = document.getElementById('wordContainer');
    const spans = wordContainer.querySelectorAll('.letter');
    currentWordData.word.split('').forEach((char, index) => {
        if (char.toUpperCase() === letter) {
            spans[index].textContent = letter;
            spans[index].classList.add('correct');
        }
    });
}

function checkWin() {
    const spans = document.querySelectorAll('.letter');
    const isComplete = Array.from(spans).every(span => span.textContent !== '_');

    if (isComplete) {
        score += (currentLevelIndex + 1) * 10; // Asignar puntuación según el nivel
        nextWord();
    }
}

function nextWord() {
    if (wordsUsed.size >= wordsPerLevel * levels.length) {
        alert('¡Felicidades! Has ganado el juego.');
        return;
    }

    if (wordsUsed.size % wordsPerLevel === 0 && wordsUsed.size !== 0) {
        currentLevelIndex++;
    }

    if (currentLevelIndex >= levels.length) {
        alert('¡Felicidades! Has completado todos los niveles.');
        return;
    }

    changeDifficulty(levels[currentLevelIndex]);

    while (wordsUsed.has(currentWordData.word)) {
        changeDifficulty(levels[currentLevelIndex]);
    }

    wordsUsed.add(currentWordData.word);
    resetLetters();
    updateGameDisplay();
}

function resetLetters() {
    document.querySelectorAll('.letters-container button').forEach(button => {
        button.classList.remove('correct', 'incorrect');
        button.classList.add('default');
    });
}

function updateGameDisplay() {
    const hintElement = document.getElementById('hint');
    const wordContainer = document.getElementById('wordContainer');
    const scoreElement = document.getElementById('score');

    if (hintElement) {
        hintElement.textContent = `Pista: ${currentWordData.hint}`;
    }

    if (wordContainer) {
        wordContainer.innerHTML = '';
        currentWordData.word.split('').forEach(() => {
            const span = document.createElement('span');
            span.textContent = '_';
            span.classList.add('letter');
            wordContainer.appendChild(span);
        });
    }

    if (scoreElement) {
        scoreElement.textContent = `Puntuacion: ${score}`;
    }
}

// Manejar la entrada del teclado físico
document.addEventListener('keydown', (event) => {
    const letter = event.key.toUpperCase();
    if (/^[A-Z]$/.test(letter)) { // Solo manejar letras de la A a la Z
        handleLetterInput(letter);
    }
});

function handleLetterInput(letter) {
    const buttons = document.querySelectorAll('.letters-container button');
    buttons.forEach(button => {
        if (button.textContent === letter) {
            button.click(); // Simular clic en el botón correspondiente
        }
    });
}

// Añadir event listener al botón de inicio
document.getElementById('startButton').addEventListener('click', startGame);

export { startGame };