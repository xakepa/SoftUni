function solve(arr) {

    const result = arr.reduce((acc, current) => {
        if (current >= Math.max(...acc)) {
            acc.push(current)
        }
        return acc;
    }, [])

    console.log(result.join('\n'));
}
solve([55, 65, -44, 65])