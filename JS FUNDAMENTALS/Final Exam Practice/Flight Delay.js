function delayCalc(input) {
    const originalDeparture = new Date('August 2, 2019 21:30');
    const delayedDeparture = new Date(input);
    const delay = delayedDeparture - originalDeparture;

    const bigNum = BigInt('999999999999999');
    console.log(bigNum - BigInt(9999999));
    console.log(Number(bigNum));
}
delayCalc('August 3, 2019 01:30');


