function arrakis(firstDayYield) {
    let operatedDays = 0;
    let spiceHarvested = 0;

    while (firstDayYield >= 100) {
        spiceHarvested += firstDayYield;
        spiceHarvested -= 26;

        firstDayYield -= 10;
        operatedDays++;
    }

    if (spiceHarvested) {
        spiceHarvested -= 26;
    }

    console.log(operatedDays);
    console.log(spiceHarvested);

}
arrakis('50');