
/**
 * Get value cards
 * @param {String} card 
 * @returns {number} return a number
 */

export const cardValue = ( card ) => {
    if( !card ) throw new Error('the card is required and is a string');

    const value = card.substring(0, card.length - 1);

    return (isNaN( value ))  ?
           (value === 'A') ? 11 : 10
           : value * 1;
}