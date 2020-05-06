function loading(num) {

    const bar = new Array(10).fill('.');

    for (let i = 0; i < num / 10; i += 1) {
        bar[i] = '%'
    }

    console.log(`${num}% [${bar.join('')}]`);

    if (num < 100) {
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
    }
}
loading(20)