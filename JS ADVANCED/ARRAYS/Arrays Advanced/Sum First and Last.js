function sumFirstAndLast(arr) {
    const first = +arr.shift();
    const last = +arr.pop();

    return first + last;
}
sumFirstAndLast(['20', '30', '40'])