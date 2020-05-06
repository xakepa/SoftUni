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

    console.log(`${(kw * price).toFixed(2)} lv.`);
}
taxCalculator(140)