function replaceChars(text) {

    let result = '';

    for (let i = 0; i < text.length; i += 1) {
        if (text[i] === text[i + 1]) {
            continue;
        } else {
            result += text[i];
        }
    }
    console.log(result);
}
replaceChars('aaaaabbbbbcdddeeeedssaa');