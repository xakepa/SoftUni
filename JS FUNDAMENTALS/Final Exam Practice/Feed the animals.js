function zoo(arrOfStrings) {
    const animals = {};
    const areas = {};

    for (let line of arrOfStrings) {
        if (line === 'Last Info') {
            break;
        }

        line = line.split(':');
        const command = line[0];
        const animalName = line[1];
        const foodWeight = +line[2];
        const zone = line[3];

        if (areas.hasOwnProperty(zone)) {
            if (!areas[zone].includes(animalName)) {
                areas[zone].push(animalName)
            }
        } else {
            areas[zone] = [animalName];
        }

        if (command === 'Add') {

            if (animals.hasOwnProperty(animalName)) {
                animals[animalName] += foodWeight;
            } else {
                animals[animalName] = foodWeight;
            }
        } else if (command === 'Feed') {

            if (animals.hasOwnProperty(animalName)) {
                animals[animalName] -= foodWeight;
            }
            if (animals[animalName] <= 0) {
                console.log(`${animalName} was successfully fed`);
                delete animals[animalName];
                const animalsInArea = areas[zone];
                const animalIndex = animalsInArea.indexOf(animalName);
                animalsInArea.splice(animalIndex, 1);

                if (!animalsInArea.length) {
                    delete areas[zone];
                }
            }
        }
    }

    const sortedAnimals = Object.entries(animals)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b));

    console.log('Animals:');

    for (const [animal, food] of sortedAnimals) {
        console.log(`${animal} -> ${food}g`);
    }
    console.log('Areas with hungry animals:');

    for (const key in areas) {
        areas[key] = areas[key].length;
    }

    const sortAreas = Object.entries(areas)
        .sort((a, b) => b[1] - a[1])
        .forEach(pair => {
            console.log(`${pair[0]} : ${pair[1]}`);
        });
}
zoo(['Add:Bonie:3490:RiverArea',
    'Add:Sam:5430:DeepWoodsArea',
    'Add:Bonie:200:RiverArea',
    'Add:Maya:4560:ByTheCreek',
    'Feed:Maya:2390:ByTheCreek',
    'Feed:Bonie:3500:RiverArea',
    'Feed:Johny:3400:WaterFall',
    'Feed:Sam:5500:DeepWoodsArea',
    'Last Info'])