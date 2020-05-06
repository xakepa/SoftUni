function kozonaks(input) {

    const inputToNum = input.map(Number);
    let [budget, pricePerKgFloor] = inputToNum;
    const priceOfPackEggs = 0.75 * pricePerKgFloor;
    const priceQuarterLiterMilk = (pricePerKgFloor + (pricePerKgFloor * 0.25)) / 4;
    const cozonakPrice = priceOfPackEggs + priceQuarterLiterMilk + pricePerKgFloor;
    let cozonaks = 0;
    let coloredEggs = 0;

    while (budget >= cozonakPrice) {

        budget -= cozonakPrice;
        cozonaks++;
        coloredEggs += 3;

        if (cozonaks % 3 == 0) {
            coloredEggs -= (cozonaks - 2);
        }
    }
    console.log(`You made ${cozonaks} cozonacs! Now you have ${coloredEggs} eggs and ${budget.toFixed(2)}BGN left.`);
}
kozonaks(['20.5', '1.25'])