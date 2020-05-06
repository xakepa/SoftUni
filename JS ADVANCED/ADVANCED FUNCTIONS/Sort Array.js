function solve(array, order) {
    if (order == 'asc') {
        return array.sort((a, b) => a - b)
    }
    return array.sort((a, b) => b - a)
}
solve([14, 7, 17, 6, 8], 'asc')