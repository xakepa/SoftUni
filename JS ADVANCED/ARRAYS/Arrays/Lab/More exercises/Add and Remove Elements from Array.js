function solve(array) {

    const arr = [];

    for (let i = 1; i <= array.length; i += 1) {
        if (array[i - 1] === 'add') {
            arr.push(i)
        } else if (array[i - 1] === 'remove') {
            arr.pop();
        }
    }
    if (arr.length) {
        console.log(arr.join(' '));
    } else {
        console.log('Empty');
    }
}
solve(['remove', 'remove', 'remove'])