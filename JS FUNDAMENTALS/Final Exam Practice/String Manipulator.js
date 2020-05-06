function strManuplator(arrayOfStrings) {

    let mainString = '';

    const Add = (str) => mainString += str;

    const Upgrade = (str) => {
        const replaceRegex = new RegExp(str, 'g');
        const asciiCharPlusOne = String.fromCharCode(str.charCodeAt(0) + 1);

        for (const letter of mainString) {
            if (letter === str) {
                mainString = mainString.replace(str, asciiCharPlusOne)
            }
        }
    }

    const Print = (str) => console.log(mainString);

    const Index = (char) => {
        let indexs = [];
        for (let i = 0; i < mainString.length; i += 1) {
            if (mainString[i] === char) {
                indexs.push(i);
            }
        }
        if (!indexs.length) {
            return console.log('None');
        }
        return console.log(indexs.join(' '));
    }

    const Remove = (str) => {
        const regex = new RegExp(str, 'g');
        if (mainString.match(regex)) {
            mainString = mainString.replace(regex, '');
        }
        return mainString;
    }

    const commands = {
        Add,
        Print,
        Upgrade,
        Index,
        Remove
    }

    for (let line of arrayOfStrings) {
        line = line.split(' ');
        const func = line[0];
        const str = line[1];

        if (func === 'End') {
            break;
        }
        commands[func](str)
    }
}
strManuplator(['Add abracadabra',
    'Print',
    'Upgrade a',
    'Print',
    'Index b',
    'Remove bbrb',
    'Print',
    'End']
)