function battleManager(arrOfStrings) {

    let players = {};

    for (let line of arrOfStrings) {
        let [command, name, health, energy] = line.split(':');

        if (command === 'Results') {
            break;
        }

        if (command === 'Add') {
            health = +health;
            energy = +energy;
            if (players.hasOwnProperty(name)) {
                players[name][0] += health;
            } else {
                players[name] = [health, energy]
            }
        } else if (command === 'Attack') {
            const attacker = name;
            const defender = health;
            const damage = +energy;

            if (players.hasOwnProperty(attacker) && players.hasOwnProperty(defender)) {
                players[defender][0] -= damage;
                players[attacker][1] -= 1;

                if (players[defender][0] <= 0) {
                    delete players[defender];
                    console.log(`${defender} was disqualified!`);
                }

                if (players[attacker][1] <= 0) {
                    delete players[attacker];
                    console.log(`${attacker} was disqualified!`);
                }
            }


        } else if (command === 'Delete') {
            if (name === 'All') {
                players = {};
            } else {
                delete players[name];
            }
        }
    }

    console.log(`People count: ${Object.keys(players).length}`);

    const sortedGamers = Object.entries(players)
        .sort((a, b) => b[1][0] - a[1][0] || a[0].localeCompare(b[0]))
        .forEach(matrix => {
            console.log(`${matrix[0]} - ${matrix[1][0]} - ${matrix[1][1]}`);
        });
}
battleManager(['Add:Mark:1000:5',
    'Add:Clark:1000:3',
    'Attack:Clark:Mark:5000000',
    'Add:Allison:2500:5',
    'Attack:Clark:Mark:300',
    'Add:Charlie:4000:10',
    'Attack:Clark:Mark:500',
    'Results'])