function factorialAndDivision(num1, num2) {

    function factorial(number) {

        if (number <= 0) {
            return 1;
        } else {
            return number * factorial(number - 1);
        }
    }

    const firstFactorial = factorial(num1);
    const secondFactorial = factorial(num2);
    const division = (firstFactorial / secondFactorial).toFixed(2)
    console.log(division);
}
factorialAndDivision(5, 2)