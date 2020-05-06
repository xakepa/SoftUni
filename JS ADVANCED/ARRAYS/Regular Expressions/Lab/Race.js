function race(arrayOfStrings) {
    const persons = arrayOfStrings.shift();
    arrayOfStrings.pop();
    const racers = {};

    arrayOfStrings.forEach(mixedInput => {
        const patternForLetters = /[A-Za-z]/g;
        const name = mixedInput.match(patternForLetters).join('');
        const kilometers = mixedInput.match(/\d/g)
            .map(Number)
            .reduce((a, b) => a + b, 0);
        if (racers.hasOwnProperty(name)) {
            racers[name] += kilometers
        } else {
            if (persons.includes(name)) {
                racers[name] = kilometers;
            }
        }
    });
    const results = Object.entries(racers).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${results[0][0]}`);
    console.log(`2nd place: ${results[1][0]}`);
    console.log(`3rd place: ${results[2][0]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)