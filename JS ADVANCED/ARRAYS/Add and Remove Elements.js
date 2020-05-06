function solve(arr) {

    const nums = [];

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] == 'add') {
            nums['push'](i + 1)
        } else {
            nums.pop();
        }
    }
    nums.length ? console.log(nums.join('\n')) : console.log('Empty');
}
solve(['add', 'add', 'remove', 'add', 'add'])