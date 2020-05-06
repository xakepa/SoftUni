function printNthElement(array) {

    const n = +array.pop();
    const arrToPrint = [];

    for (let i = 0; i < array.length; i += 1) {
        if (i % n === 0) {
            arrToPrint.push(array[i]);
        }
    }
    console.log(arrToPrint.join(' '));
}
printNthElement(['5', '20', '31', '4', '20', '2'])