function reverseArr(n, arr) {
    const newArr = arr.slice(0, n);
    console.log(newArr.reverse().join(' '));
}
reverseArr(2, [66, 43, 75, 89, 47])