function perfect(number) {


    const perfectNumber = function (n) {

        let perfect;
        let divisors = 1;

        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) {
                divisors += i;
            }
        }
        if (divisors === n) {
            perfect = true;
        }
        return perfect;
    }

    perfectNumber(number) ? console.log('We have a perfect number!') : console.log('It\'s not so perfect.');
}
perfect(60)