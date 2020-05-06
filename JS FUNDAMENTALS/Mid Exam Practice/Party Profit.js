function rpgGame(input) {

    let dailyIncome = 0;
    let companions = Number(input[0]);
    let days = Number(input[1]);


    for (let i = 1; i <= days; i += 1) {


        if (i % 10 === 0) {
            companions -= 2;
        }

        if (i % 15 === 0) {
            companions += 5;
        }

        dailyIncome += 50;
        dailyIncome -= 2 * companions;

        if (i % 3 === 0) {
            dailyIncome -= 3 * companions;
        }

        if (i % 5 === 0) {
            dailyIncome += companions * 20;
            if (i % 3 === 0) {
                dailyIncome -= companions * 2
            }
        }


    }
    const profitPerCompanion = dailyIncome / companions | 0;
    console.log(`${companions} companions received ${profitPerCompanion} coins each.`);
}
rpgGame(['3', '5'])