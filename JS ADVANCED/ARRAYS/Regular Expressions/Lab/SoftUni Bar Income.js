function softuniBarIncome(arrayOfStrings) {
    arrayOfStrings.pop();
    const namePattern = /%([A-Z][a-z]+)%/;
    const productPattern = /<(\w+)>/;
    const countPattern = /\|(\d+)\|/;
    const pricePattern = /(\d+\.*\d*)\$/;
    let total = 0;

    arrayOfStrings.forEach(mixedString => {
        if (namePattern.test(mixedString) && productPattern.test(mixedString)
            && countPattern.test(mixedString) && pricePattern.test(mixedString)) {
            const name = mixedString.match(namePattern);
            const product = mixedString.match(productPattern);
            const count = mixedString.match(countPattern);
            const price = mixedString.match(pricePattern);

            total += count[1] * price[1];
            console.log(`${name[1]}: ${product[1]} - ${(count[1] * price[1]).toFixed(2)}`);
        }
    });
    console.log(`Total income: ${total.toFixed(2)}`);
}
softuniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])