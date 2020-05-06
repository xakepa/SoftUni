function firstAndLastK(array) {

    const firstK = array.shift();
    const firstRow = [];
    const secondRow = [];

    for (let i = 0; i < firstK; i += 1) {
        firstRow.push(array[i])
    }
    console.log(firstRow.join(' '));

    const secondPartIndex = (array.length) - firstK;

    for (let i = secondPartIndex; i < array.length; i += 1) {
        secondRow.push(array[i])
    }

    console.log(secondRow.join(' '));
}
firstAndLastK([3,
    6, 7, 8, 9])