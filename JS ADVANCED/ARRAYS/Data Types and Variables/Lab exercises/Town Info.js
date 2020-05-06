function randomizeDeck(deck) {

    const getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    }


    for (let i = 0; i < 300; i += 1) {
        let current = deck.splice(getRandomInt(deck.length), 1);
        deck.push(current.join(''));
    }

    console.log(deck);
}
randomizeDeck(['2C', '2S', '2H', '2D', '3C', '3S', '3D', '3H',
    '4C', '4D', '4S', '4H', '5C', '5D', '5H', '5S', '6C', '6D', '6S', '6H', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'])