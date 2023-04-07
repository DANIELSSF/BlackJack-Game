
/**
 * Get Card
 * @param {Array<string>} deck 
 * @returns {String}  A new card
 */

export const getCard = ( deck ) => { 

    if ( !deck || deck.length === 0 ){ 
        throw "There's not cards";
    }
    return deck.pop();
} 