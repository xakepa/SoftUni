function dictionary(array) {

    const dictionaryObj = {};
    let input = array.shift().split(' | ');
    const dictToCheck = array.shift().split(' | ');
    const command = array[0];

    for (let line of input) {
        const [word, description] = line.split(':');

        if (dictionaryObj.hasOwnProperty(word)) {
            dictionaryObj[word].push(description)
        } else {
            dictionaryObj[word] = [description];
        }
    }

    if (command === 'End') {

        const sortDictionary = Object.entries(dictionaryObj)
            .sort((a, b) => a[0].length - b[0].length);

        sortDictionary.forEach(pair => {
            const word = pair[0];
            let description = pair[1];

            description = description.sort((a, b) => b.length - a.length);

            if (dictToCheck.includes(word)) {
                console.log(word);
                description.forEach(descr => {
                    console.log(`-${descr.trim()}`);
                });
            }
        });
    } else if (command === 'List') {
        const sortKeys = Object.keys(dictionaryObj)
            .sort((a, b) => a.localeCompare(b));

        console.log(sortKeys.join(' '));
    }
}
dictionary(['tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'End']
)