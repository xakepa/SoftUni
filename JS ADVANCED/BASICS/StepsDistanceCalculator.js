function walker(steps, footSize, speedPerHour) {
    const meters = steps * footSize;
    const speedPerSecond = speedPerHour * 1000 / 60 / 60;
    const minutesForBreak = Math.floor(meters / 500);
    let seconds = meters / speedPerSecond;
    let hours = '0';
    let minutes = (seconds / 60 | 0) + minutesForBreak;
    seconds += minutesForBreak * 60;
    seconds %= 60;
    seconds = Math.round(seconds)

    if (minutes > 59) {
        hours = minutes / 60 | 0;
        minutes -= hours * 60;
    }

    if (seconds < 9) {
        seconds = '0' + seconds;
    }
    if (minutes < 9) {
        minutes = '0' + minutes;
    }
    if (hours < 9) {
        hours = '0' + hours;
    }
    console.log(`${hours}:${minutes}:${seconds}`);
}
walker(10000, 0.50, 6)