function checkResult(num1, num2, num3) {

    const nums = Array.of(num1, num2, num3);
    let negative = 0;
    let positive = 0;
    let result;

    for (num of nums) {
        if (num >= 0) {
            positive++;
        } else {
            negative++;
        }
    }

    if (positive == 2) {
        result = 'Negative';
    } else if (negative == 2) {
        result = 'Positive';
    } else if (positive == 3) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }
    if (num1 < 0 && num2 >= 0 && num3 >= 0) {
        result = 'Positive';
    }
    console.log(result);
}
checkResult(-1, 0, 55)