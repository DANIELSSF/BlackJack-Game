import _ from 'underscore';

/** 
 * Create a new deck
 * @param {Array<string>} typesCards Example: ['C', 'D', 'H', 'S']
 * @param {Array<string>} specialsCards Example: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} Return a new deck
 */

export const createDeck = (typesCards, specialsCards) => {

    if(!typesCards || typesCards === 0) throw new Error('typeCards is required as an array of strings');
    if(!specialsCards || specialsCards === 0) throw new Error('specialsCards is required as an array of strings');

    let deck = []; 

    for (let i = 2; i <= 10; i++) {
        for (let typeCard of typesCards) {
            deck.push(i + typeCard);
        }
    }

    for (let specialCard of specialsCards) {
        for (let typeCard of typesCards) {
            deck.push(specialCard + typeCard);
        }
    }
    
    return _.shuffle( deck );
}