function inventory(inputArray) {
    const heroes = [];
    inputArray.forEach(line => {
        let [heroName, level, items] = line.split(' / ');
        items = items.split(', ').sort((a, b) => a.localeCompare(b));
        const hero = {
            name: heroName,
            level: Number(level),
            items
        };
        heroes.push(hero);
    });
    heroes.sort((a, b) => a.level - b.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}
inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])