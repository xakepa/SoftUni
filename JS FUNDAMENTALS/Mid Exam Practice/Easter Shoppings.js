function easterShoppings(inputArray) {
    let shops = inputArray.shift().split(' ');
    const commandsCount = Number(inputArray.shift());

    for (let i = 0; i < commandsCount; i += 1) {
        const currentCommand = inputArray[i].split(' ');

        switch (currentCommand[0]) {
            case 'Include':
                shops.push(currentCommand[1]);
                break;
            case 'Visit':
                const index = +currentCommand[2];

                if (index <= shops.length && index >= 0) {// Проверка на индексите
                    if (currentCommand[1] === 'first') {
                        shops.splice(0, index)
                    } else {
                        shops.splice((shops.length - index), (index))// Не трябва да е shops.splice((shops.length - index), (shops.length - index))
                    }
                }
                break;
            case 'Prefer':
                const firstIndex = +currentCommand[1];
                const secondIndex = +currentCommand[2];
                if (firstIndex >= 0 && secondIndex >= 0 && shops.length > firstIndex && shops.length > secondIndex) {// Проверка на индексите
                    const tempStoreFirstIndex = shops[firstIndex];
                    shops[firstIndex] = shops[secondIndex]
                    shops[secondIndex] = tempStoreFirstIndex;
                }
                break;
            case 'Place':
                let i = +currentCommand[2];
                if (shops.length > i + 1 && i >= 0) {// Проверка на индексите
                    shops.splice(i + 1, 0, currentCommand[1])
                }
        }
    }
    console.log('Shops left:');
    console.log(shops.join(' '));
}
easterShoppings(['Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2'])