function expenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;

    for (let i = 1; i <= lostFights; i += 1) {
        if (!(i % 2)) {
            totalExpenses += helmetPrice;
        }
        if (!(i % 3)) {
            totalExpenses += swordPrice;
        }

        if (i % 2 == 0 && i % 3 == 0) {
            totalExpenses += shieldPrice;
        }
        if (!(i % 12)) {
            totalExpenses += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
expenses(23, 12.5, 21.5, 40, 200)