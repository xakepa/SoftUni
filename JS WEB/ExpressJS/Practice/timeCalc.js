function totalTime(time) {
    let [hours, mins] = time.split(':');
    hours *= 60;
    totalMins = hours + Number(mins);
    return totalMins;
}

function time(startTime, endTime) {

    const time = totalTime(endTime) - totalTime(startTime);

    hours = time / 60 | 0;
    mins = time % 60;

    console.log(hours, mins);
}
time('08:40', '12:30')

