function solve(arrOfStrings) {

    const cars = {};

    for (const line of arrOfStrings) {
        const [carName, modelName, quantity] = line.split(' | ');
        if (!cars.hasOwnProperty(carName)) {
            cars[carName] = [{ [modelName]: +quantity }]
        } else {
            if (cars[carName][modelName] === modelName) {
                cars[carName][modelName] += quantity;
            } else {
                cars[carName].push({ [modelName]: +quantity });
            }
        }
    }

    console.log(cars);

    for (const key in cars) {
        if (cars.hasOwnProperty(key)) {
            const machine = cars[key];
            console.log(key);
            machine.forEach(element => {
                Object.entries(element).forEach(arr => {
                    console.log(`###${arr[0]} -> ${arr[1]}`);
                });
            });
        }
    }
}
solve([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'
])