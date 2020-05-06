function specialNums(n) {

    for (let i = 1; i <= n; i += 1) {
        const splited = i.toString().split('').map(Number);
        let sum = splited.reduce((acc, total) => acc + total, 0);
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
specialNums(15)