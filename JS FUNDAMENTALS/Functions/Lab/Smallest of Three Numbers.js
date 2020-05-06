function smallestOfThree(num1, num2, num3) {
    let smallest = num2;

    if (num1 < num2) {
        smallest = num1;
    }

    if (num3 < smallest) {
        smallest = num3;
    }
    console.log(smallest);
}
smallestOfThree(-2, 0, 1);