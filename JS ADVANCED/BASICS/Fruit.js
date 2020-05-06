function fruit(fruitType, weight, price) {

    const totalWeight = weight / 1000;
    const sum = totalWeight * price;
    console.log(`I need $${sum.toFixed(2)} to buy ${totalWeight.toFixed(2)} kilograms ${fruitType}.`);
}
fruit('apple', 1563, 2.35)