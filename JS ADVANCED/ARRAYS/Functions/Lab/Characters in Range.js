function charsInRange(char1, char2) {
    const chars = [];

    //determine which is smaller for the range
    const startIndex = char1 < char2 ? char1 : char2;
    const endIndex = char1 > char2 ? char1 : char2;

    for (let i = startIndex.charCodeAt(0) + 1; i < endIndex.charCodeAt(0); i += 1) {
        chars.push(String.fromCodePoint(i));
    }
    console.log(chars.join(' '));
}
charsInRange('C', '#');