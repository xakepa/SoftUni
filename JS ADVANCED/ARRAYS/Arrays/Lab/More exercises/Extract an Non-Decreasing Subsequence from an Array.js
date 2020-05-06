// function solve(array) {

//     const result = [];
//     let currentMax = array[0];

//     const compare = function (array) {

//         for (let i = 0; i < array.length; i += 1) {
//             if (array[i] >= currentMax) {
//                 currentMax = array[i]
//                 result.push(currentMax)
//             }
//         }
//     }
//     compare(array)
//     console.log(result.join(' '));
// }
function solve(array) {

    array.unshift(0)
    const nonDecreasing = array.filter((x, i) => x >= array[i - 1])
    console.log(nonDecreasing.join(' '));
}
solve([20, 15, 2, 3])