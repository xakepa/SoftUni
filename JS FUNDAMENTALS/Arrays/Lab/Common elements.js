function commonElements(firstArr, secondArr) {
    for (element of firstArr) {
        if (secondArr.includes(element)) {
            console.log(element);
        }
    }
}
commonElements(["S", "o", "f", "t", "U", "n", "i", " "],
    ["s", "o", "c", "i", "a", "l"]
)