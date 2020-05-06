function solve(type, kW, age) {
    switch (type) {
        case 'motorcycle':
            totalCalcCycle(kW);
            break;
        case 'car':
            totalCalcCar(kW, age);
            break;
    }

    function coefficientFunc(carAge) {
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

    function totalCalcCar(kW, age) {

        let price = 0;

        if (kW < 37) {
            price = 0.43;
        } else if (kW <= 55) {
            price = 0.5;
        } else if (kW <= 74) {
            price = 0.68;
        } else if (kW <= 110) {
            price = 1.38;
        } else {
            price = 1.54;
        }

        let totalPrice = kW * price * coefficientFunc(age);
        console.log(totalPrice.toFixed(2) + ' lv.');
    }

    function totalCalcCycle(volume) {
        let taxPrice = 0;
        if (volume > 750) {
            taxPrice = 125;
        } else if (volume > 490) {
            taxPrice = 94;
        } else if (volume > 350) {
            taxPrice = 63;
        } else if (volume > 250) {
            taxPrice = 44;
        } else if (volume > 125) {
            taxPrice = 31;
        } else {
            taxPrice = 15;
        }
        taxPrice = taxPrice.toFixed(2);
        console.log(taxPrice + ' lv.');
    }
}
solve('car', 90, 7)