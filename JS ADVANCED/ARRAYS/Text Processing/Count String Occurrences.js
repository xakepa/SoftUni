function countStrOccurrences(sentence, findWord) {
    sentence = sentence.split(' ').filter(word => word === findWord);
    console.log(sentence.length);
}
countStrOccurrences("This is a word and it also is a sentence",
    "is")