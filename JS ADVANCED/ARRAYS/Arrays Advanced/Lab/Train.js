function solve(array) {

    const inputWagons = array.shift().split(' ').map(Number)
    const maxCapacity = +array.shift();

    for (let command of array) {
        let currentCommand = command.split(' ')

        if (currentCommand[0] == 'Add') {
            inputWagons.push(+currentCommand[1]);
        } else {
            currentCommand = Number(currentCommand)
            for (let i = 0; i < inputWagons.length; i += 1) {
                if (inputWagons[i] + currentCommand <= maxCapacity) {
                    inputWagons[i] += currentCommand;
                    break;
                }
            }
        }
    }
    console.log(inputWagons.join(' '));
}
solve(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])