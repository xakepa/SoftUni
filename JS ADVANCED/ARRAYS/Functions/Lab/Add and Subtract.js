function addAndSubtract(num1, num2, num3) {

    const add = (a, b) => a + b;
    const subtract = x => add(num1, num2) - x;
    const solve = () => console.log(subtract(num3));

    solve();
}
addAndSubtract(23, 6, 10)