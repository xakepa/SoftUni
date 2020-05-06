function distinctArray(array) {
    let noRepeated = new Set(array);
    console.log(...noRepeated);
}
distinctArray([7, 8, 9, 7, 2, 3,
    4, 1, 2])


    // version 2
    // function distinct(array) {

    //     const noReps = [];

    //     for (const num of array) {
    //         if (!noReps.includes(num)) {
    //             noReps.push(num)
    //         }
    //     }
    //     console.log(noReps.join(' '));
    // }