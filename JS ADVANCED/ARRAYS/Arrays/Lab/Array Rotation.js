function arrRotation(array, rotations) {
    for (let i = 0; i < rotations; i += 1) {
        const currentElement = array.shift();
        array.push(currentElement);
    }
    console.log(array.join(' '));
}
arrRotation([2, 4, 15, 31],
    5
)
