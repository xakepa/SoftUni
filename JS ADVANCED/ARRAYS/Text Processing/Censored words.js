function censored(text, word) {

    function repeat(theWord) {
        const censor = '*'.repeat(theWord.length);
        return censor;
    }
    // let nqkoi = 'putka';
    // nqkoi = repeat(nqkoi)
    // console.log(nqkoi);

    let censoredText = text.replace(word, repeat(word));
    while (censoredText.includes(word)) {
        censoredText = censoredText.replace(word, repeat(word))
    }

    console.log(censoredText);
}
censored("A small sentence with some words", "small")