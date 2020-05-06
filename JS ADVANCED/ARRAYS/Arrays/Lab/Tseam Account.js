function games(array) {

    let command = array.shift();
    const modifiedGames = command.split(' ');

    while (command.toString() !== 'Play!') {
        command = array.shift();
        command = command.split(' ');

        if (command[0] === 'Install' && !modifiedGames.includes(command[1])) {
            modifiedGames.push(command[1])
        } else if (command[0] === 'Uninstall' && modifiedGames.includes(command[1])) {
            for (let i = 0; i < modifiedGames.length; i++) {
                if (modifiedGames[i] === command[1]) {
                    modifiedGames.splice(i, 1);
                    break;
                }
            }
        } else if (command[0] === 'Update' && modifiedGames.includes(command[1])) {
            for (let i = 0; i < modifiedGames.length; i++) {
                if (modifiedGames[i] === command[1]) {
                    const updated = String(modifiedGames.splice(i, 1));
                    modifiedGames.push(updated);
                    break;
                }
            }
        } else if (command[0] === 'Expansion') {
            const expanse = command[1].split('-');
            if (modifiedGames.includes(expanse[0])) {
                for (let i = 0; i < modifiedGames.length; i++) {
                    if (modifiedGames[i] === expanse[0]) {
                        modifiedGames.splice(i + 1, 0, expanse[0] + ':' + expanse[1]);
                        break;
                    }
                }
            }
        }
    }
    console.log(modifiedGames.join(' '));
}
games(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
)