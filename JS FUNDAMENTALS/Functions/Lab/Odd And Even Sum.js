function oddAndEvenSum(num) {
    num = String(num);
    let oddSum = 0;
    let evenSum = 0;

    for (digit of num) {
        if (+digit % 2) {
            oddSum += +digit;
        } else {
            evenSum += +digit;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234)