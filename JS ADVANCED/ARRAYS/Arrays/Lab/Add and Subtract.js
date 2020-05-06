function addAndSubtract(arr) {

    const modified = [];
    let totalModified = 0;
    arr.forEach((element, i) => {
        if (element % 2) {
            modified.push(element - i)
        } else {
            modified.push(element + i)
        }
    });
    console.log(modified);

    const totalOriginal = arr.reduce((acc, total) => acc + total, 0);
    for (num of modified) {
        totalModified += num;
    }
    console.log(totalOriginal);
    console.log(totalModified);

}
addAndSubtract([5, 15, 23, 56, 35])