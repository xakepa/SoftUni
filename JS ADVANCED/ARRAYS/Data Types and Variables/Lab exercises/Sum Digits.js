function sum(x) {
    const splited = x.toString().split('').map(Number);
    const sumDigits = splited.reduce((acc, total) => acc + total, 0);
    console.log(sumDigits);

}
sum(245678);