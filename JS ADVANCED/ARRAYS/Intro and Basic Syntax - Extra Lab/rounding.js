function rounding(num, roundParameter) {
    let round = roundParameter;
    if (round > 15) {
        round = 15;
    }
    num = num.toFixed(round);
    console.log(Number.parseFloat(num));
}
rounding(10.5, 3)