function PascalCaseSplitter(text) {


    const isCapital = function (letter) {
        if (letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91) {
            return true;
        } else {
            return false;
        }
    }

    let sentence = '';

    for (char of text) {
        if (!isCapital(char)) {
            sentence += char;
        } else {
            sentence += ' ';
            sentence += char;
        }
    }
    sentence = sentence.trim();
    console.log(sentence.split(' ').join(', '));
}
PascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');

let toSplit = 'SplitMeIfYouCanHaHaYouCantOrYouCan';
let pattern = /[A-Z ]/g;
let splited = toSplit.split(pattern);
console.log(splited);