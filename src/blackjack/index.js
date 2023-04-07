import { 
    createDeck, 
    getCard, 
    accomulatePoints, 
    createCard,
    turnAi,
    nextTurn,
} from './usecases/index';

let deck = [];
const typesCards    = ['C', 'D', 'H', 'S'],
      specialsCards = ['A', 'J', 'Q', 'K'];

let pointsPlayers = [];

const btnOrder   = document.querySelector('#btnOrder'),
      btnStop    = document.querySelector('#btnStop'),
      btnNew     = document.querySelector('#btnNew'),
      scoreHTML  = document.querySelectorAll('small'),
      divCards   = document.querySelectorAll('.divCards');


const newGame = ( numPlayers = 2 ) => {
    deck = createDeck(typesCards, specialsCards);

    pointsPlayers = [];
    for( let i = 0 ; i < numPlayers ; i++){
        pointsPlayers.push(0);
    }

    scoreHTML.forEach( (element) => element.innerText = 0 );
    divCards.forEach( (element) => element.innerHTML = '' );

    btnOrder.disabled=false;
    btnStop.disabled=false;
}

// Events
btnOrder.addEventListener('click', () => {

    const card = getCard( deck );
    const turn = 0;
    accomulatePoints( turn, card, pointsPlayers, scoreHTML );

    createCard( card, 0, divCards );
    nextTurn( pointsPlayers, btnOrder, btnStop, divCards, deck, scoreHTML );

});

btnStop.addEventListener('click', () => {
    const [scorePlayer,] = pointsPlayers;

    btnOrder.disabled = true;
    btnStop.disabled  = true;
    turnAi( scorePlayer, pointsPlayers, divCards, deck, scoreHTML  );
});


btnNew.addEventListener('click', () => {
    newGame();
});



