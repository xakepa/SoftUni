function revealWords(missingWords, text) {
    let savedText = text;
    missingWords = missingWords.split(', ');
    text = text.split(' ');

    for (const word of missingWords) {
        for (let missingWord of text) {
            if (word.length === missingWord.length && missingWord[0] == '*') {
                text.replace
                // const index = text.indexOf(missingWord);
                // text[index] = word;
                savedText = savedText.replace(missingWord, word)
            }
        }
    }
    console.log(savedText);
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')