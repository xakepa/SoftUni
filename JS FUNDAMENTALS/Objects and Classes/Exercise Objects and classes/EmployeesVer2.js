function solve(array) {
    const obj = {}
    array.forEach(x => {
        obj[x] = x.length;
    });

    Object.entries(obj).forEach(element => {
        let [name, length] = element;
        console.log(`Name: ${name} -- Personal Number: ${length}`);
    });
}
solve(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'])