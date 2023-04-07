import { cardValue } from './';

/**
 * Calculate points accumulated for players and ai
 * @param {Number} turn - The current player's turn
 * @param {String} card - The card that was drawn
 * @param {Array<number>} pointsPlayers - An array of the points for each player
 * @param {HMLELement} scoreHTML - An array of HTML elements displaying each player's score
 * @returns {Number} - The points accumulated for the current player
 */

export const accomulatePoints = ( turn, card, pointsPlayers, scoreHTML  ) => {
    pointsPlayers[turn] = pointsPlayers[turn] + cardValue(card);
    scoreHTML[turn].innerText = pointsPlayers[turn];
    return pointsPlayers[turn];
}