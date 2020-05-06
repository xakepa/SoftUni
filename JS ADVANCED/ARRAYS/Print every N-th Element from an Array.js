function solve(arr) {
    const step = +arr.pop();

    for (let i = 0; i < arr.length; i += step) {
        console.log(arr[i]);
    }
}
solve(['5', '20', '31', '4', '20', '2'])