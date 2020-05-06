function oddOccur(string) {
    string = string.toLowerCase().split(' ');

    const odds = new Map();

    string.forEach(word => {
        const repeated = string.filter(w => w === word)
        if (repeated.length % 2) {
            odds.set(word, repeated.length)
        }
    });
    const occurs = Array.from(odds.keys());
    console.log(occurs.join(' '));
}
oddOccur('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')