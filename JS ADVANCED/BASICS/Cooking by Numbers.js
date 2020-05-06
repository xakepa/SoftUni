function cooking(arr) {

    let numb = +arr.shift();

    const chop = (num) => num / 2;
    const dice = (num) => Math.sqrt(num);
    const spice = (num) => num += 1;
    const bake = (num) => num *= 3;
    const fillet = (num) => num = num - (num * 0.2);

    const commands = {
        chop,
        dice,
        spice,
        bake,
        fillet
    }

    for (const command of arr) {
        numb = commands[command](numb);
        console.log(numb);
    }
}
cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])