function solve(arr) {
    const delimeter = arr.pop();

    return arr.join(delimeter);
}
console.log(solve([
    'How', 'about',
    'no?', 'I',
    'will', 'not',
    'do', 'it!',
    '_'
]))