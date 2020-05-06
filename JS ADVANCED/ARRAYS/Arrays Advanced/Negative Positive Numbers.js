function sortNumbers(array) {

    const sorted = [];

    for (num of array) {
        num < 0 ? sorted.unshift(num) : sorted.push(num)
    }

    sorted.forEach(element => {
        console["log"](element);
    });
}
sortNumbers([3, -2, 0, -1])
