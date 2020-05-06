function calc(num, operator, num2) {
    num = Number(num);
    num2 = Number(num2);
    let result = 0;

    switch (operator) {
        case '+':
            result = num + num2;
            break;
        case '-':
            result = num - num2;
            break;
        case '*':
            result = num * num2;
            break;
        case '/':
            result = num / num2;
    }
    console.log(result.toFixed(2));
}
calc('5', '+', '10');