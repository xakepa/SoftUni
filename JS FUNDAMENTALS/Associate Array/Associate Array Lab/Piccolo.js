function parking(arrayOfStrings) {

    let carNums = new Map();

    for (let currentCar of arrayOfStrings) {
        currentCar = currentCar.split(', ')
        const inOrOut = currentCar.shift();
        currentCar = String(currentCar);

        if (inOrOut === 'IN') {
            carNums.set(currentCar, 1);
        } else {
            carNums.delete(currentCar)
        }
    }

    const parkedCars = Array.from(carNums.keys())
        .sort((a, b) => a.localeCompare(b))
        .forEach(car => console.log(car));
}
parking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)