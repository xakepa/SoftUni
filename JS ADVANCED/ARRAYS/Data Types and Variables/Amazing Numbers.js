function amazingNumbers(num) {
    const inputNum = num;
    let sum = 0;
    let amazing = false;
    for (digit of num.toString()) {
        sum += +digit;
    }
    for (let i = 0; i < num.toString().length; i += 1) {
        if (sum.toString()[i] == 9) {
            amazing = true;
            break;
        }
    }
    if (amazing) {
        console.log(`${inputNum} Amazing? True`);
    } else {
        console.log(`${inputNum} Amazing? False`);
    }
}
amazingNumbers(56);