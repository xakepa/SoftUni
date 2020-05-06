function rotating(array) {
    const rotations = array.pop() % array.length;

    for (let i = 0; i < rotations; i += 1) {
        const last = array.pop();
        array.unshift(last);
    }
    console.log(array.join(' '));
}
rotating(['1', '2', '3', '4', '2'])