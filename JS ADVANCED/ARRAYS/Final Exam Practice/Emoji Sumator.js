function emojiCalculator(array) {
    const findEmojii = /(?<=\s):([a-z]{4,}):(?=[\s,.!?])/g;
    let [text, correspond] = array;
    let totalPower = 0;
    let emoji;
    const emojiFound = [];
    const emojisClean = [];
    correspond = correspond.split(':');

    const decrypter = (string) => {

        let word = '';

        for (let num of correspond) {
            word += String.fromCharCode(num);
        }

        return word;
    }

    function calculateAsciiPower(string) {
        let sumPower = 0;

        for (let letter of string) {
            letter = letter.charCodeAt(0);
            sumPower += letter;
        }

        return sumPower;
    }

    while ((emoji = findEmojii.exec(text)) !== null) {
        emojiFound.push(emoji[0].trim());
        emojisClean.push(emoji[1])
        totalPower += calculateAsciiPower(emoji[1]);
    }
    if (emojiFound.length) {
        console.log(`Emojis found: ${emojiFound.join(', ')}`);
    }

    if (emojisClean.includes(decrypter())) {
        totalPower *= 2;
    }
    console.log(`Total Emoji Power: ${totalPower}`);
}
emojiCalculator(['Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110']
)