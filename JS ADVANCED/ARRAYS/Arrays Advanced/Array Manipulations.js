function arrManupulations(commands) {
    let arr = commands.shift().split(' ').map(Number);

    for (const command of commands) {
        let [currentCommand, firstNum, secondNum] = command.split(' ');
        firstNum = +firstNum;
        secondNum = +secondNum;

        switch (currentCommand) {
            case 'Add':
                arr.push(firstNum)
                break;
            case 'Remove':
                arr = arr.filter(e => e != firstNum);
                break;
            case 'RemoveAt':
                arr.splice(firstNum, 1);
                break;
            case 'Insert':
                arr.splice(secondNum, 0, firstNum)
        }
    }
    console.log(arr.join(' '));
}
arrManupulations(['4 19 2 53 2 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])