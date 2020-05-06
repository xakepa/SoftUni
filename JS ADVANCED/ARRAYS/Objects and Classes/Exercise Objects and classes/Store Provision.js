function store(array1, array2) {

    const storeProducts = {};

    for (let i = 0; i < array1.length; i += 2) {
        storeProducts[array1[i]] = +array1[i + 1];

    }

    for (let i = 0; i < array2.length; i += 2) {
        const product = array2[i];
        const additional = +array2[i + 1]
        if (storeProducts.hasOwnProperty(product)) {

            storeProducts[product] += additional
        } else {
            storeProducts[product] = additional
        }
    }

    for (const key in storeProducts) {
        console.log(`${key} -> ${storeProducts[key]}`);
    }
}
store(['Chips',
    '5',
    'CocaCola',
    '9',
    'Bananas',
    '14',
    'Pasta',
    '4',
    'Beer',
    '2'], ['Flour',
        '44',
        'Oil',
        '12',
        'Pasta',
        '7',
        'Tomatoes',
        '70',
        'Bananas',
        '30']
)