function theDaVinciCode(input) {
    let stringToDecode = input[0];
    const charOrSubsr = input[1].split(' ');
    let decrypted = '';
    let validBookPattern = /^[d-z{},|#]+$/;

    for (let letter of stringToDecode) {
        letter = String.fromCharCode(letter.charCodeAt(0) - 3);
        decrypted += letter;
    }

    const regex = new RegExp(charOrSubsr[0]);

    while (regex.exec(decrypted) !== null) {
        decrypted = decrypted.replace(charOrSubsr[0], charOrSubsr[1])
    }

    validBookPattern.test(stringToDecode)
        ? console.log(decrypted)
        : console.log('This is not the book you are looking for.');

}
theDaVinciCode(['wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
    'ec an'])