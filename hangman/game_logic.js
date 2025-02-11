// Importamos las listas de palabras de diferentes niveles
import { easyWords, mediumWords, hardWords, nearlyImpossibleWords } from './words.js';

// Variable para almacenar la palabra y la pista actualmente seleccionadas
let currentWordData = {};

/**
 * Cambia el nivel de dificultad y carga una nueva palabra aleatoria.
 * @param {string} level - El nivel de dificultad ('easy', 'medium', 'hard', 'nearlyImpossible')
 */
function changeDifficulty(level) {
    // Determinamos qué lista de palabras usar basada en el nivel
    let wordList;
    switch (level) {
        case 'easy':
            wordList = easyWords;
            break;
        case 'medium':
            wordList = mediumWords;
            break;
        case 'hard':
            wordList = hardWords;
            break;
        case 'nearlyImpossible':
            wordList = nearlyImpossibleWords;
            break;
        default:
            // Si el nivel no es reconocido, usamos palabras fáciles por defecto
            wordList = easyWords;
            break;
    }

    // Verificamos si hay palabras disponibles en la lista seleccionada
    if (wordList.length === 0) {
        console.error('No hay palabras disponibles para este nivel.');
        return;
    }

    // Seleccionamos una palabra aleatoria de la lista y actualizamos currentWordData
    currentWordData = {
        word: wordList[Math.floor(Math.random() * wordList.length)],
        clue: 'Aquí iría la pista' // Asegúrate de que cada palabra tenga una pista asociada
    };
}

// Exportamos las variables y funciones para usarlas en otros archivos
export { currentWordData, changeDifficulty };