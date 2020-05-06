function fuelCost(distance, passangers, fuelPrice) {
    let fuelUsage = 7;

    let usagePerKm = (distance / 100) * fuelUsage;
    if (passangers) {
        usagePerKm += passangers * 0.1;
    }
    const expenses = (usagePerKm * fuelPrice);
    console.log('Needed money for that trip is ' + expenses + 'lv.');
}
fuelCost(260, 9, 2.49)