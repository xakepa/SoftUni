function easterGifts(giftsArray) {
    let gifts = giftsArray.shift().split(' ')
    let command = giftsArray.shift().split(' ');

    while (command[0] !== 'No') {

        if (command[0] === 'OutOfStock') {
            gifts = gifts.map(function (element) {
                if (element === command[1]) {
                    return 'None'
                }
                return element;
            })
        } else if (command[0] === 'Required') {
            const index = +command[2];
            const currentGift = command[1];

            if (index <= gifts.length - 1 && index >= 0) {
                const insertAndReplace = gifts.splice(index, 1);
                gifts.splice(index, 0, currentGift);
            }
        } else {
            gifts[gifts.length - 1] = command[1];
        }
        command = giftsArray.shift().split(' ');
    }
    const giftsPurchased = gifts.filter(g => g !== 'None');
    console.log(giftsPurchased.join(' '));
}
easterGifts(['Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money']
)