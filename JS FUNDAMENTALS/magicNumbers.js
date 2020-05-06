function magicNumbers(input) {
    const magic = +input.shift();
    const magNums = [];

    for (let i = 1; i <= 9; i += 1) {
        for (let j = 1; j <= 9; j += 1) {
            for (let k = 1; k <= 9; k += 1) {
                for (let m = 1; m <= 9; m += 1) {
                    for (let n = 1; n <= 9; n += 1) {
                        for (let o = 1; o <= 9; o += 1) {
                            let product = i * j * k * m * n * o;
                            if (product == magic) {
                                magNums.push(`${i}${j}${k}${m}${n}${o}`);
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(magNums.join(' '));
}
magicNumbers([8])