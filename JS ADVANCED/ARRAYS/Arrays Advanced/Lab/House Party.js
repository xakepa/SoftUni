function party(array) {

    const input = array.map(x => x.split(' '));
    const guests = [];

    for (const subArray of input) {
        const name = subArray[0];
        if (!subArray.includes('not')) {
            if (!guests.includes(name)) {
                guests.push(name)
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (guests.includes(name)) {
                guests.splice(guests.indexOf(name), 1)
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    guests.forEach(name => console.log(name));
}
party(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])