function matrices(matrix) {

    const results = [];

    for (let i = 0; i < matrix.length; i += 1) {
        let sum = 0;

        for (let s = 0; s < matrix.length; s += 1) {
            sum += matrix[i][s];
        }
        results.push(sum)
    }
    const sumOfMatrix = results[0];

    for (const result of results) {
        if (result !== sumOfMatrix) {
            return false;
        }
    }
    return true;
}
console.log(matrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]));