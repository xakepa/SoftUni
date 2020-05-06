function solve(array, array2) {
    const [elemToTake, elemToDelete, elemToFind] = array2;
    const takenElements = array.slice(0, elemToTake);
    takenElements.splice(0, elemToDelete);
    const find = takenElements.filter(x => x == elemToFind);
    console.log(`Number ${elemToFind} occurs ${find.length} times.`);
}
solve([5, 2, 4, 4, 1, 6],
    [5, 2, 9])