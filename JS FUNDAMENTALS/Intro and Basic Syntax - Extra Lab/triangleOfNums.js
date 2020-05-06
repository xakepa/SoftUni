// simple method

// function triangleNums(n) {

//     for (let i = 1; i <= n; i += 1) {
//         let num = '';
//         console.log((num += i + ' ').repeat(i));
//     }
// }
// triangleNums(5)


// nested loops method
function triangleNums(n) {

    for (let i = 1; i <= n; i += 1) {
        let num = '';

        for (let x = 1; x <= i; x += 1) {
            num += i + ' ';
        }
        console.log(num);
    }
}
triangleNums(5)