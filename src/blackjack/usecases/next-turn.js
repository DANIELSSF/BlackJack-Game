import { turnAi } from './';

/**
 * Next Player Turn
 * @param {Array<Number>} pointsPlayers 
 * @param {HTMLElement} btnOrder 
 * @param {HTMLElement} btnStop 
 * @param {HTMLElement} divCards 
 * @param {Array<String>} deck 
 * @param {HTMLElement} scoreHTML 
 */

export const nextTurn = (pointsPlayers, btnOrder, btnStop, divCards, deck, scoreHTML) => {
    const [scorePlayer,] = pointsPlayers;
    
    (scorePlayer > 21)
    ? ( btnOrder.disabled = true,
        btnStop.disabled  = true,
        turnAi( scorePlayer, pointsPlayers, divCards, deck, scoreHTML  ) )
    : ( scorePlayer === 21)
    && ( btnOrder.disabled = true,
         btnStop.disabled  = true,
         turnAi( scorePlayer, pointsPlayers, divCards, deck, scoreHTML  ) );
}