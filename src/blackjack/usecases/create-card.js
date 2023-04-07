

/**
 * Function for create html card
 * @param {String} card 
 * @param {Number} turn 
 * @param {HTMLElement} divCards 
 */

export const createCard = ( card, turn, divCards ) => {
    const imgCard = document.createElement('img');
          imgCard.src = `assets/cartas/${card}.png`;
          imgCard.classList.add( 'carta' );
          divCards[turn].appendChild( imgCard );
}