const backgrounds = [];
for (let i = 1; i <= 17; i++) {
    backgrounds.push(`url('assets/background${i}.gif')`);
}

let currentBackgroundIndex = 0;

function shuffleBackgrounds() {
    // Mezcla los fondos para evitar repeticiones inmediatas
    for (let i = backgrounds.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [backgrounds[i], backgrounds[j]] = [backgrounds[j], backgrounds[i]];
    }
}

function setNextBackground() {
    const layers = document.querySelectorAll('.background-layer');

    if (currentBackgroundIndex >= backgrounds.length) {
        shuffleBackgrounds(); // Mezclar si ya se usaron todos
        currentBackgroundIndex = 0;
    }

    layers[0].style.backgroundImage = backgrounds[currentBackgroundIndex];
    layers[0].style.opacity = 1;

    currentBackgroundIndex++;

    // Aplica el desvanecimiento después de 9 segundos
    setTimeout(() => {
        layers[0].style.opacity = 0;
    }, 9000);
}

window.onload = function () {
    shuffleBackgrounds(); // Mezclar los fondos al inicio
    startBackgroundLoop();
};
