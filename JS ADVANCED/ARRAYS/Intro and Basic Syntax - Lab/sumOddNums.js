function sumOdd(num) {
    let sum = 0;
    let currentOperationCounter = 0;
    for (let i = 1; i < 100; i += 1) {
        if (i % 2) {
            console.log(i);
            sum += i;
            ++currentOperationCounter;
        }
        if (currentOperationCounter === num) {
            console.log('Sum: ' + sum);
            break;
        }
    }
}