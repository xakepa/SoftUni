function printAndSum(startNumber, endNumber) {
    let sum = 0;
    const arr = [];
    for (let i = startNumber; i <= endNumber; i += 1) {
        sum += i;
        arr.push(i)
    }
    console.log(arr.join(' '));
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)