function mergeArrays(firstArr, secondArr) {
    const mergedArr = [];

    for (let i = 0; i < firstArr.length; i += 1) {
        let merged = 0;
        if (i % 2) {
            merged = firstArr[i] + secondArr[i]
        } else {
            merged = +firstArr[i] + +secondArr[i]
        }
        mergedArr.push(merged);
    }
    console.log(mergedArr.join(' - '));
}
mergeArrays(["5", "15", "23", "56", "35"],
    ["17", "22", "87", "36", "11"]
)