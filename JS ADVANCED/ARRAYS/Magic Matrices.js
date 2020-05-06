function sudoku(matrix) {
    const firstSum = matrix[0].reduce((acc, sum) => acc + sum);
    let result = true;


    for (let row = 0; row < matrix.length; row += 1) {
        let sumRows = 0;
        let sumCols = 0;

        for (let col = 0; col < matrix.length; col += 1) {
            sumRows += matrix[row][col];
            sumCols += matrix[col][row];

            console.log(sumRows, sumCols);
        }

        if (sumRows !== firstSum || sumCols !== firstSum) {
            result = false;
            break;
        }
    }
    console.log(result);
}
sudoku([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]])