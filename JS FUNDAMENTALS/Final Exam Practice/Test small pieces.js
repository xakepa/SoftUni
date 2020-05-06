// function sortObj(obj) {
//     const sorted = Object.entries(obj).sort((a, b) => {
//         return a[0].localeCompare(b[0]);
//     })
//     for (const [name, age] of sorted) {
//         console.log(name, age);
//     }
// }
// sortObj({
//     'Plamen': 31,
//     'Nicolay': 33,
//     'Igor': 38,
//     'Boqn': 7,
//     'Simeon': 8,
//     'Vilislava': 34
// })

function checkValidity(longString) {
    const regex = /^[d-z{},|#]+$/;

    if (regex.test(longString)) {
        return true;
    }

    return false;
}