function cutAndReverse(text) {
    let firstSentence = text.substr(0, (text.length / 2))
    let secondSentence = text.substring((text.length / 2))

    const reverseString = (str) => {
        str = str.split('').reduce((prev, current) => current + prev, '')
        return str;
    }
    firstSentence = reverseString(firstSentence);
    secondSentence = reverseString(secondSentence);
    console.log(firstSentence);
    console.log(secondSentence);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')