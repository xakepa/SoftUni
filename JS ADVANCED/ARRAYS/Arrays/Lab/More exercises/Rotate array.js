function rotating(array) {
    const rotations = array.pop();

    for (let i = 0; i < rotations; i += 1) {
        const last = array.pop();
        array.unshift(last);
    }
    console.log(array.join(' '));
}
rotating(['Banana', 'Orange', 'Coconut', 'Apple', '15']
)