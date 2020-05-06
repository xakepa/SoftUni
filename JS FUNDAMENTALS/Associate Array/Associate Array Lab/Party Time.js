function party(guests) {

    const guestsList = {
        'vip': [],
        'regular': []
    }

    const partyIndex = guests.indexOf('PARTY');
    const invated = guests.slice(0, partyIndex);
    const guestWhoCame = guests.slice(partyIndex + 1);

    for (const guest of invated) {
        if (+guest[0]) {
            guestsList.vip.push(guest);
        } else {
            guestsList.regular.push(guest);
        }
    }

    for (const guest of guestWhoCame) {
        if (+guest[0]) {
            const indexOfVip = guestsList['vip']['indexOf'](guest);
            guestsList['vip']['splice'](indexOfVip, 1);
        } else {
            const indexOfReg = guestsList.regular.indexOf(guest);
            guestsList.regular.splice(indexOfReg, 1);
        }
    }
    console.log(guestsList.vip.length + guestsList.regular.length);
    guestsList.vip.forEach(vip => console.log(vip));
    guestsList.regular.forEach(reg => console.log(reg));
}
party(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'])