function magic(array, unique) {

    for (let i = 0; i < array.length; i += 1) {
        const current = array[i];
        for (let x = i + 1; x < array.length; x += 1) {
            if ((current + array[x]) == unique) {
                console.log(current, array[x]);
            }
        }
    }
}
magic([1, 7, 6, 2, 19, 23], 8)