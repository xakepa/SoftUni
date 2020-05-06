function socialBullshit(text) {
    text = text.split(' ').forEach(word => {
        if (word[0] === '#') {
            if (isValidWord(word.slice(1))) {
                console.log(word.slice(1));
            }
        }
    });

    function isValidWord(wordAsString) {
        let valid;
        for (let char of wordAsString) {
            char = char.toLowerCase();
            if (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123) {
                valid = true;
            } else {
                return false;
            }
        }
        return valid;
    }
}
socialBullshit('Nowadays everyone uses # to tag a #special word in #socialMedia')