function strManupulator(arrayOfStrings) {
    let stringToChange = arrayOfStrings.shift();

    const Change = (str, char, replacement) => {
        const replaceRegex = new RegExp(char, 'g');

        while (replaceRegex.exec(str) !== null) {
            str = str.replace(char, replacement)
        }
        stringToChange = str;
        return console.log(str);
    }

    const Includes = (str, someString) => {
        if (str.includes(someString)) {
            return console.log('True');
        }
        return console.log('False');
    }

    const End = (str, word) => (str.endsWith(word))
        ? console.log('True')
        : console.log('False');

    const Uppercase = (str) => {
        str = str.toUpperCase();
        stringToChange = str;
        return console.log(stringToChange);
    }

    const FindIndex = (str, char) => console.log(str.indexOf(char));

    const Cut = (str, startIndex, length) => {

        startIndex = Number(startIndex);
        length = Number(length);

        str = str.substr(startIndex, length)
        return console.log(str);
    }

    const commands = {
        Change, Includes, End, Uppercase, FindIndex, Cut
    }


    for (let line of arrayOfStrings) {
        line = line.split(' ');
        const func = line[0];
        const str = line[1];
        const index = line[2];

        if (func === 'Done') {
            break;
        }
        commands[func](stringToChange, str, index)
    }
}
strManupulator(['//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'])