function gcd(num1, num2) {
    const smallest = num1 < num2 ? num1 : num2;
    let result = 1;

    for (let i = smallest; i > 1; i -= 1) {
        if (num1 % i === 0 && num2 % i === 0) {
            result = i;
            break;
        }
    }
    return result;
}
gcd(2154, 458)