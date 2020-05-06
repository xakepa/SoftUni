function displayArgs(arg1, arg2, arg3) {

    const countTypes = {}

    for (const arg of arguments) {

        const type = typeof arg;

        if (countTypes.hasOwnProperty(type)) {
            countTypes[type] += 1;
        } else {
            countTypes[type] = 1;
        }
        console.log(`${type}: ${arg}`);
    }

    function sorting() {

        return this.Object.entries(countTypes).sort((a, b) => b[1] - a[1])
            .forEach(element => {
                console.log(`${element[0]} = ${element[1]}`);
            });
    }
    sorting()
}
displayArgs('cat', 42, function () {
    console.log('Hello world!');
})
