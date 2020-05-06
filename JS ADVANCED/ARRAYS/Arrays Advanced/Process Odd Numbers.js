function processOddNumbers(array) {
    const oddPositions = array.filter((x, i) => i % 2)
        .map(e => e * 2).reverse().join(' ');

    return oddPositions;
}
processOddNumbers([10, 15, 20, 25])