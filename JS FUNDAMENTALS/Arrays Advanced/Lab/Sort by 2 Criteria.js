function sorting(array) {

    const compare = function (a, b) {
        if (a.length === b.length) {
            return a > b;
        }
        return a.length - b.length;
    }

    array.sort(compare)
    array.forEach(element => console.log(element));
    // array = array.sort((a, b) => a.length - b.length || a.localeCompare(b))
}
sorting(['test', 'Deny', 'omen', 'Default']);
