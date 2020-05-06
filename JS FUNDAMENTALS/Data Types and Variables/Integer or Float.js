function intFloat(num1, num2, num3) {
    const sum = +num1 + +num2 + +num3;
    const result = Number.isInteger(sum) ? 'Integer' : 'Float';
    console.log(`${sum} - ${result}`);
}
intFloat(9, 100, 1.1)