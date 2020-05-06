function solve(arr) {

    function compare(a, b) {
        if (a.length < b.length) {
            return -1
        } else if (a.length > b.length) {
            return 1
        } else if (a.length === b.length) {
            return a.localeCompare(b)
        }
    }

    const sorted = arr.sort(compare)
    console.log(sorted.join('\n'));
}
solve(['test',

    'Deny',

    'omen',

    'Default'])