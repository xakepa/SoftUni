function solve(kw, age) {

    let taxCalc = taxCalculator(kw);
    let coefficient = coeff(age);
    const total = taxCalc * coefficient;
    console.log(total.toFixed(2) + ' lv.');

    function taxCalculator(kw) {

        let price = 0;

        if (kw < 37) {
            price = 0.43;
        } else if (kw <= 55) {
            price = 0.5;
        } else if (kw <= 74) {
            price = 0.68;
        } else if (kw <= 110) {
            price = 1.38;
        } else {
            price = 1.54;
        }

        return (price * kw);
    }

    function coeff(carAge) {
        let currentCoeff = 0;
        if (carAge > 14) {
            currentCoeff = 1;
        } else if (carAge > 5) {
            currentCoeff = 1.5;
        } else if (carAge < 5) {
            currentCoeff = 2.8;
        }
        return currentCoeff;
    }
}
solve(310, 0.5)