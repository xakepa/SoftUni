function stringReverse(arr) {
    console.log(arr.reverse().join(' '));
}
stringReverse(['abc', 'def', 'hig', 'klm', 'nop'])


// ver 2.0
// function stringReverse(arr) {
//     let reversed = '';
//     for (let i = arr.length - 1; i >= 0; i -= 1) {
//         reversed += arr[i] + ' ';
//     }
//     console.log(reversed);
// }
// stringReverse(['a', 'b', 'c', 'd', 'e'])