function triples(n) {

    for (let x = 0; x < n; x += 1) {
        for (let y = 0; y < n; y += 1) {
            for (let z = 0; z < n; z += 1) {
                console.log(`${String.fromCharCode(x + 97)}${String.fromCharCode(y + 97)}${String.fromCharCode(z + 97)}`);
            }
        }
    }
}
triples(3)