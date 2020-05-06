function equalSums(array) {

    let equal;

    for (let i = 1; i < array.length; i += 1) {
        let firstArr = array.slice(0, i);
        let secondArr = array.slice(i + 1);
        const sumFirst = firstArr.reduce((acc, sum) => acc + sum, 0);
        const sumSecond = secondArr.reduce((acc, sum) => acc + sum, 0);
        if (sumFirst === sumSecond) {
            console.log(i);
            equal = true;
            break;
        }
    }
    if (array.length === 1) {
        console.log(0);
    } else if (!equal) {
        console.log('no');
    }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])