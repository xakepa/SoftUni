function rightPlace(word, replaceChar, secondWord) {

    let newWord = '';

    for (let i = 0; i < word.length; i += 1) {
        let currentSymbol = word[i];
        if (word[i] == '_') {
            currentSymbol = replaceChar;
        }
        newWord += currentSymbol;
    }
    const result = newWord == secondWord ? 'Matched' : 'Not Matched';
    console.log(result);
}
rightPlace('Str_ng', 'i', 'String');

/* with Replace function

function rightPlace(word, replaceChar, secondWord) {
    const replacedWord = word.replace('_', replaceChar);
    if (replacedWord == secondWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

    */