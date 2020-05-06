function solve(array) {

    const sortByTwoCriterias = (a, b) => a.length - b.length || a.localeCompare(b);

    const removeDublicates = array.filter((x, i) => array.indexOf(x) === i)
        .sort(sortByTwoCriterias)
        .forEach(element => {
            console.log(element);
        });
}
solve(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston',
    'Lilly']
)