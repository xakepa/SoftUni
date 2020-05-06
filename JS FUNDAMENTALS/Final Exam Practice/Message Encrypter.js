function messageEncrypter(arrInput) {

    arrInput.shift();

    for (let line of arrInput) {
        const regexPattern = /([\*|@])([A-Z]{1}[a-z]{2,})\1:\s\[[A-Za-z]]\|\[[A-Za-z]]\|\[[A-Za-z]]\|+$/g;
        const lettersToEncrypt = /([A-Z,a-z]+)/g;


        if (regexPattern.test(line)) {

            const word = /([\*|@])([A-Z]{1}[a-z]{2,})\1/g.exec(line)[2];


            let letters = line.split(':')[1];
            let foundLetters = letters.match(lettersToEncrypt)
                .map(letter => letter.charCodeAt(0))
                .join(' ');
            console.log(`${word}: ${foundLetters}`);

        } else {
            console.log('Valid message not found!');
        }
    }
}
messageEncrypter(['3',
    '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
    '*tAGged*: [i][i][i]|',
    'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|']
)