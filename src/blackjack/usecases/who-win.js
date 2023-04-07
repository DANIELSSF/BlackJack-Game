
/**
 * 
 * @param {Array<Number>} pointsPlayers 
 */

export const whoWins = ( pointsPlayers ) => {
    const [ pointPlayer, pointAi ] = pointsPlayers;

    setTimeout(() => {

        ( pointAi === pointPlayer ) ? ( alert('Empate') )
             : ( pointPlayer > 21 ) ? ( alert('Ai Win') )
             : ( pointAi > 21 ) ? ( alert('Player win') )
             : ( pointAi > pointPlayer ) && ( alert('Ai Win') );

    }, 500);
}