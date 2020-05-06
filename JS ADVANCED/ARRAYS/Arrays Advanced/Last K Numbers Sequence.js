function lastKSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i += 1) {
        let startIndex = i - k;
        //let startIndex = Math.max(i - k, 0)
        if (startIndex < 0) {
            startIndex = 0;
        }

        let subArr = result.slice(startIndex);
        let sum = subArr.reduce((a, b) => a + b);

        result.push(sum);
    }
    console.log(result.join(' '));
}
lastKSequence(8, 2)