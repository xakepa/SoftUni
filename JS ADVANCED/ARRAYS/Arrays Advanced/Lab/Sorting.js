function sorting(array) {

    array.sort((a, b) => b - a);
    const sorted = [];

    while (array.length) {
        const biggest = array.shift();
        const smallest = array.pop();
        sorted.push(biggest, smallest)
    }
    console.log(sorted.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 94])