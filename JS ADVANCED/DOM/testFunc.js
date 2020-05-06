function solve(arr) {

    const firstDiagonal = 0;
    const secondDiagonal = 0;

    for (let row = 0, col = arr.length - 1; row < arr.length; row++ , col--) {
        firstDiagonal += arr[row][row];
        secondDiagonal += arr[row][col];
    }
    return firstDiagonal + ' ' + secondDiagonal;
}
solve(
    [[3, 5, 17, 50],
    [-1, 7, 14, 17],
    [1, -8, 89, 40],
    [7, -6, -44, 15]
    ]
)
