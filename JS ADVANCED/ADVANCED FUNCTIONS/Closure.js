function solve() {
    let num = 5;
    return function secondary() {
        num = 6;
        return console.log(num + 1);
    }

}
console.log(solve());