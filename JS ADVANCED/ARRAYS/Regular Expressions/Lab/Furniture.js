function furniturePurchase(inputArray) {

    console.log('Bought furniture:');
    let totalSum = 0;

    inputArray.forEach(furnitureString => {
        const regPattern = />>(\w+)<<(\d+\.*\d*)!(\d)/g;
        const validFurniture = regPattern.exec(furnitureString);
        if (validFurniture) {
            const furnName = validFurniture[1];
            console.log(furnName);
            totalSum += validFurniture[2] * validFurniture[3];
        }
    });
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniturePurchase(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])