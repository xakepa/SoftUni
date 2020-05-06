function matrix(n) {

    const nString = String(n) + ' ';

    for (let i = 0; i < n; i += 1) {
        console.log(nString.repeat(n));
    }
}
matrix(7);