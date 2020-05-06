function maxNum(arr) {

    const maxNum = [];
    let z = arr.length;

    for (let i = 0; i < z; i += 1) {
        const current = arr.shift();
        const max = Math.max(...arr);
        if (current > max) {
            maxNum.push(current)
        }
    }
    console.log(maxNum.join(' '));
}

maxNum([14, 24, 3, 19, 15, 17])