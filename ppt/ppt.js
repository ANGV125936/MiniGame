let player1Name = '';
let player2Name = '';
let player1Score = 0;
let player2Score = 0;
let player1Choice = '';
let player2Choice = '';
let intervalId1;
let intervalId2;
let roundNumber = 1;

const choices = ['piedra', 'papel', 'tijera'];
const leftImages = [
    'assets/left_rock.png', 
    'assets/left_paper.png', 
    'assets/left_scissors.png'
];
const rightImages = [
    'assets/right_rock.png', 
    'assets/right_paper.png', 
    'assets/right_scissors.png'
];
const winnerImages = [
    'assets/winner1.png', 
    'assets/winner2.png'
];

document.body.onkeyup = function(e) {
    if (e.key === "a") {
        playButtonSound();
        clearInterval(intervalId1);
        player1Choice = document.getElementById('leftHand').getAttribute('data-choice');
        checkIfBothChosen();
    } else if (e.key === "l") {
        playButtonSound();
        clearInterval(intervalId2);
        player2Choice = document.getElementById('rightHand').getAttribute('data-choice');
        checkIfBothChosen();
    }
};

function playButtonSound() {
    const buttonSound = document.getElementById('buttonSound');
    buttonSound.currentTime = 0;
    buttonSound.play();
}

function playWinningSound() {
    const winningSound = document.getElementById('winningSound');
    winningSound.currentTime = 0;
    winningSound.play();
}

function setupVolumeControl() {
    const volumeSlider = document.getElementById('volumeSlider');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const buttonSound = document.getElementById('buttonSound');
    const winningSound = document.getElementById('winningSound');
    const volumeIcon = document.getElementById('volumeIcon');

    // Establecer el volumen inicial al 20%
    backgroundMusic.volume = 0.20;
    buttonSound.volume = 0.20;
    winningSound.volume = 0.20;

    volumeSlider.addEventListener('input', (event) => {
        const volume = event.target.value;
        backgroundMusic.volume = volume;
        buttonSound.volume = volume;
        winningSound.volume = volume;

        // Cambiar el ícono según el volumen
        if (volume == 0) {
            volumeIcon.innerText = '🔇'; // Mute
        } else if (volume < 0.5) {
            volumeIcon.innerText = '🔈'; // Volumen bajo
        } else {
            volumeIcon.innerText = '🔊'; // Volumen alto
        }
    });
}

function startGame() {
    player1Name = document.getElementById('player1Name').value || 'Jugador 1';
    player2Name = document.getElementById('player2Name').value || 'Jugador 2';
    document.getElementById('player1Title').innerText = player1Name;
    document.getElementById('player2Title').innerText = player2Name;
    document.getElementById('result').innerText = '';
    document.getElementById('player1Score').innerText = '0';
    document.getElementById('player2Score').innerText = '0';
    player1Score = 0;
    player2Score = 0;
    roundNumber = 1;
    document.getElementById('winnerImageContainer').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();
    showRound();
    startChoices();
}

function showRound() {
    const roundElement = document.getElementById('round');
    roundElement.innerText = 'Ronda ' + roundNumber;
    roundElement.classList.add('show-round');

    setTimeout(() => {
        roundElement.classList.remove('show-round');
    }, 1500);
}

function startChoices() {
    intervalId1 = setInterval(() => {
        const choiceIndex = Math.floor(Math.random() * 3);
        document.getElementById('leftHand').src = leftImages[choiceIndex];
        document.getElementById('leftHand').setAttribute('data-choice', choices[choiceIndex]);
        document.getElementById('leftHand').parentElement.style.backgroundColor = '';
    }, 100);

    intervalId2 = setInterval(() => {
        const choiceIndex = Math.floor(Math.random() * 3);
        document.getElementById('rightHand').src = rightImages[choiceIndex];
        document.getElementById('rightHand').setAttribute('data-choice', choices[choiceIndex]);
        document.getElementById('rightHand').parentElement.style.backgroundColor = '';
    }, 100);
}

function checkIfBothChosen() {
    if (player1Choice && player2Choice) {
        playGame();
    }
}

function playGame() {
    let result = '';

    if (player1Choice === player2Choice) {
        result = '¡Empate!';
        document.getElementById('player1Choice').style.backgroundColor = 'grey';
        document.getElementById('player2Choice').style.backgroundColor = 'grey';
    } else if (
        (player1Choice === 'piedra' && player2Choice === 'tijera') ||
        (player1Choice === 'papel' && player2Choice === 'piedra') ||
        (player1Choice === 'tijera' && player2Choice === 'papel')
    ) {
        result = `${player1Name} ¡Ganó la ronda!`;
        player1Score++;
        document.getElementById('player1Choice').style.backgroundColor = 'blue';
        document.getElementById('player2Choice').style.backgroundColor = 'red';
    } else {
        result = `${player2Name} ¡Ganó la ronda!`;
        player2Score++;
        document.getElementById('player2Choice').style.backgroundColor = 'blue';
        document.getElementById('player1Choice').style.backgroundColor = 'red';
    }

    document.getElementById('result').innerText = `${player1Name} eligió: ${player1Choice} | ${player2Name} eligió: ${player2Choice} | Resultado: ${result}`;
    document.getElementById('player1Score').innerText = player1Score;
    document.getElementById('player2Score').innerText = player2Score;

    if (player1Score === 5 || player2Score === 5) {
        declareWinner(player1Score === 5 ? player1Name : player2Name);
        return;
    }

    setTimeout(() => {
        player1Choice = '';
        player2Choice = '';
        roundNumber++;
        showRound();
        startChoices();
    }, 2000);
}

function declareWinner(winnerName) {
    playWinningSound();

    const winnerImageContainer = document.getElementById('winnerImageContainer');
    const randomImage = winnerImages[Math.floor(Math.random() * winnerImages.length)];
    winnerImageContainer.innerHTML = `<img src="${randomImage}" alt="Ganador" class="winner-image">`;
    winnerImageContainer.innerHTML += `<h2 class="winner-name">${winnerName} es el ganador!</h2>`;
    winnerImageContainer.innerHTML += `
        <div class="winner-buttons">
            <button onclick="startGame()">Jugar de Nuevo</button>
            <button onclick="location.href='../index.html'">Volver al Menú</button>
        </div>`;
    winnerImageContainer.style.display = 'block';

    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';

    const winnerNameElement = document.querySelector('.winner-name');
    winnerNameElement.style.fontSize = '48px';
    winnerNameElement.style.opacity = '1';
    winnerNameElement.style.transform = 'scale(1)';

    document.getElementById('result').innerText = `${winnerName} es el ganador!`;

    for (let j = 0; j < 5; j++) {
        setTimeout(() => {
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * window.innerWidth + 'px';
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                confetti.style.animationDelay = `${Math.random() * 2}s`;
                document.body.appendChild(confetti);
            }
        }, j * 500);
    }

    setTimeout(() => {
        const confettis = document.querySelectorAll('.confetti');
        confettis.forEach(confetti => confetti.remove());
    }, 7000);
}

// Inicializar el control de volumen
setupVolumeControl();