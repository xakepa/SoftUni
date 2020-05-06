function shortestAndLongestWord(text) {

    const arrText = text.split(' ');
    const lengths = arrText.map((x) => x.length);
    const smallest = Math.min(...lengths);
    const biggest = Math.max(...lengths);
    let shortest, longest;

    for (word of arrText) {
        if (word.length == smallest) {
            shortest = word;
            break;
        }
    }

    for (word of arrText) {
        if (word.length == biggest) {
            longest = word;
            break;
        }
    }

    console.log('Longest ->', longest);
    console.log('Shortest ->', shortest);
}
shortestAndLongestWord('ddd a ddef')