function train(array) {
    const wagons = array.shift()
        .split(' ').map(Number);
    const maxCapacity = +array.shift();

    for (let number of array) {
        number = number.split(' ');

        if (number.includes('Add')) {
            wagons.push(+number[1])
        } else {
            for (let i = 0; i < wagons.length; i += 1) {
                if (wagons[i] + +number <= maxCapacity) {
                    wagons[i] += +number;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']
)