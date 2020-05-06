function solve(array) {

    const allHeroes = [];

    for (let line of array) {
        const heroes = {};
        let [name, level, items] = line.split(' / ');
        heroes.name = name;
        heroes.level = +level;
        items = items ? items.split(', ') : [];
        heroes.items = items;

        allHeroes.push(heroes)
    }
    console.log(JSON.stringify(allHeroes));
}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])