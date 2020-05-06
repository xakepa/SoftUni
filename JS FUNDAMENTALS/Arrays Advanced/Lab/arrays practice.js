function housePartyGuests(list) {
    const guestsList = [];

    for (let guest of list) {
        guest = guest.split(' ');
        const name = guest[0];

        if (!guest.includes('not')) {
            if (guestsList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestsList.push(name);
            }
        } else {
            if (guestsList.includes(name)) {
                guestsList.splice(guestsList.indexOf(name), 1)
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
    }
    while (guestsList.length) {
        console.log(guestsList.shift())
    }
}
housePartyGuests(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)