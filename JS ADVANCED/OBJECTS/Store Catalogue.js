function solve(arr) {
    const products = new Map();

    for (const line of arr) {
        const [key, value] = line.split(' : ');
        products.set(key, value);
    }
    const sorted = [...products.entries()]
        .sort((a, b) => a[0].localeCompare(b[0]));

    let currentLetter = '';

    for (const matrix of sorted) {
        const [name, value] = matrix;
        if (currentLetter !== name[0]) {
            console.log(name[0]);
            currentLetter = name[0];
        }
        console.log(`  ${name}: ${value}`);
    }
}
solve(['Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
)