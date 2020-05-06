function termDictionary(arrayInput) {
    const dictionary = {};
    const arrayOfObjects = arrayInput.map(JSON.parse)

    for (const obj of arrayOfObjects) {
        const tuple = Object.entries(obj);
        const term = tuple[0][0];
        const definition = tuple[0][1];
        dictionary[term] = definition;
    }

    const sortedDictionary = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]));
    sortedDictionary.forEach(element => {
        const [term, ...description] = element;
        console.log(`Term: ${term} => Definition: ${description}`);
    });
}
termDictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])