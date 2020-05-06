function BMI(name, age, weight, height) {

    const bmiCalculate = (weight, height) => {
        const heightInMeters = height / 100;
        return Math.round(weight / (heightInMeters * heightInMeters));
    }

    const bmi = bmiCalculate(weight, height);

    const status = () => {
        let result;

        if (bmi < 18.5) {
            result = 'underweight';
        } else if (bmi < 25) {
            result = 'normal';
        } else if (bmi < 30) {
            result = 'overweight';
        } else {
            result = 'obese';
        }
        return result;
    }


    const personHealthInfo = {
        name,
        personalInfo: {
            age, weight, height
        },
        BMI: bmi,
        status: status()
    }

    if (status() === 'obese') {
        personHealthInfo.recommendation = 'admission required';
    }

    return personHealthInfo;
}
console.log(BMI('Plamen', 32, 67, 170))