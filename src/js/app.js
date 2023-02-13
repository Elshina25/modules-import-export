import Game from './game.js';
import GameSavingData, { loadGame as readGameSaving, saveGame as writeGameSaving } from './game.js';


const game = new Game();
game.start();
