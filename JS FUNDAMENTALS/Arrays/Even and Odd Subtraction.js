function evenAndOddSubstraction(arr) {

    let oddSum = 0;
    let evenSum = 0;
    arr.forEach(x => {
        x % 2 ? oddSum += x : evenSum += x;
    });
    console.log(evenSum - oddSum);
}
evenAndOddSubstraction([2, 4, 6, 8, 10])