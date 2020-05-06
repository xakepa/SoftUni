function calculator(a, b, operator) {
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    switch (operator) {
        case 'multiply':
            console.log(multiply(a, b));
            break;
        case 'divide':
            console.log(divide(a, b));
            break;
        case 'add':
            console.log(add(a, b));
            break;
        case 'subtract':
            console.log(subtract(a, b));
    }
}
calculator(12, 19, 'divide')