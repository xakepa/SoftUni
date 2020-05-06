function btcMining(gold) {
    const goldPerGram = 67.51;
    const bitcoinPrice = 11949.16;
    let sum = 0;
    let bitcoins = 0;
    let dayOfFirstBitcoin;

    for (let i = 1; i <= gold.length; i += 1) {
        let currentDay = i;

        if (currentDay % 3 == 0) {
            gold[i - 1] = gold[i - 1] -= gold[i - 1] * 0.3
        }
        sum += goldPerGram * gold[i - 1]
        while (sum >= bitcoinPrice) {
            sum -= bitcoinPrice;
            bitcoins++;
        }
        if (dayOfFirstBitcoin) {
            continue;
        } else {
            if (bitcoins) {
                dayOfFirstBitcoin = currentDay;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (dayOfFirstBitcoin) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${sum.toFixed(2)} lv.`);
}
btcMining([3124.15, 504.212, 2511.124])