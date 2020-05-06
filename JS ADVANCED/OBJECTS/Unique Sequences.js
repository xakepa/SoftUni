function solve(arrays) {

    let sums = arrays.map((x) => JSON.parse(x))
        .map((x) => x.reduce((acc, sum) => acc + sum, 0));

    const sortArrDescending = ((a, b) => b - a);
    let result = [];

    for (let i = 0; i < arrays.length; i += 1) {


        let current = JSON.parse(arrays[i]);
        let sum = current.reduce((acc, sum) => acc + sum, 0);
        sums.shift();

        if (!sums.includes(sum)) {
            current = current.sort(sortArrDescending);
            result.push(current);
        }
    }

    result = result.sort((a, b) => a.length - b.length);

    for (let arr of result) {
        arr = JSON.stringify(arr);
        console.log(arr.split(',').join(', '));
    }
}
solve([
    '[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]'
])