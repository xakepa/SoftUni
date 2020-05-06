function tracker(arrayInput) {
    const words = arrayInput.shift().split(' ');
    const obj = new Map();

    words.forEach(word => {
        const wordArr = arrayInput.filter(w => w === word);
        obj.set(word, wordArr.length);
    });

    const result = obj.entries();
    const arr = [];
    for (const part of obj) {
        arr.push(part)
    }
    arr.sort((a, b) => Number(b[1]) - Number(a[1]));

    for (const subArr of arr) {
        console.log(`${subArr[0]} - ${subArr[1]}`);
    }
}
tracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])