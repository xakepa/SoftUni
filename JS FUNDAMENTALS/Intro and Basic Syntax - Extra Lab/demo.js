function amazingNumbers(num) {
    let sum = 0;
    while (num) {
       sum += num % 10;
        num /= 10 | 0;
    }
    console.log(sum)
}
amazingNumbers(1233);