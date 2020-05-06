function gladiatorInvntory(array) {

    const peshoInvenoty = array.shift().split(' ');

    for (let command of array) {
        command = command.split(' ');
        let item = command[1];

        switch (command[0]) {
            case 'Buy':
                if (!peshoInvenoty.includes(item)) {
                    peshoInvenoty.push(item);
                }
                break;
            case 'Trash':
                if (peshoInvenoty.includes(item)) {
                    peshoInvenoty.splice(peshoInvenoty.indexOf(item), 1);
                }
                break;
            case 'Repair':
                if (peshoInvenoty.includes(item)) {
                    const repaired = peshoInvenoty.splice(peshoInvenoty.indexOf(item), 1).toString();
                    peshoInvenoty.push(repaired)
                }
                break;
            case 'Upgrade':
                const weapon = item.split('-');
                let upgraded = '';
                if (peshoInvenoty.includes(weapon[0])) {
                    upgraded = (`${weapon[0]}:${weapon[1]}`)
                    let index = peshoInvenoty.indexOf(weapon[0]);
                    peshoInvenoty.splice((index + 1), 0, upgraded)
                }
        }

    }
    console.log(peshoInvenoty.join(' '));
}
gladiatorInvntory(['SWORD Shield Spear',

    'Buy Bag',

    'Trash Shield',

    'Repair Spear',

    'Upgrade SWORD-Steel'

]);