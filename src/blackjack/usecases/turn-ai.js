import { accomulatePoints, createCard, getCard, whoWins } from './';


/**
 * Turn Ai
 * @param {Number} minimumScore 
 * @param {Array<Number>} pointsPlayers 
 * @param {HTMLElement} divCards 
 * @param {Array<String>} deck 
 * @param {HTMLElement} scoreHTML 
 */

export const turnAi = (minimumScore, pointsPlayers, divCards, deck, scoreHTML) => {

    const position = pointsPlayers.length - 1;
    let pointAi = 0;

    do {
        const card = getCard(deck);
        pointAi = accomulatePoints(position, card, pointsPlayers, scoreHTML);
        createCard(card, position, divCards);

    } while ((pointAi < minimumScore) && (minimumScore <= 21));

    whoWins(pointsPlayers);
}