function solve(array) {
    const obj = new Map();

    array.forEach(x => {
        obj.set(x, x.length)
    });


    for (const pair of obj) {
        let [name, length] = pair;
        console.log(`Name: ${name} -- Personal Number: ${length}`);
    }
}
solve(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'])