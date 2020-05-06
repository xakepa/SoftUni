function equalArrs(firstArr, secondArr) {
    let equal = true;
    let totalSum = 0;
    for (let i = 0; i < firstArr.length; i += 1) {
        if (firstArr[i] === secondArr[i]) {
            totalSum += +firstArr[i];
        } else {
            equal = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }
    if (equal) {
        console.log(`Arrays are identical. Sum: ${totalSum}`);
    }
}
equalArrs(['1'], ['10'])