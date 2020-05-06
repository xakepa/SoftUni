function biggest(x, y, z) {
    let max = x;

    if (y > x) {
        max = y;
    }
    if (z > max) {
        max = z;
    }
    console.log(max);
}
biggest(-2, 7, 3)