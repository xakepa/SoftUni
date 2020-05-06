function solve(array) {

    const juices = {};
    const bottles = {};

    for (let line of array) {
        let [juice, quantity] = line.split(' => ');
        quantity = +quantity;

        if (!juices.hasOwnProperty(juice)) {
            juices[juice] = 0;
        }
        juices[juice] += quantity;

        const currentQuantity = juices[juice];

        if (currentQuantity >= 1000) {
            bottles[juice] = currentQuantity / 1000 | 0;
        }
    }
    for (const key in bottles) {
        if (bottles.hasOwnProperty(key)) {
            const fruit = bottles[key];
            console.log(`${key} => ${fruit}`);
        }
    }
}
solve([
    'Peach => 1432',
    'Orange => 2000',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
])