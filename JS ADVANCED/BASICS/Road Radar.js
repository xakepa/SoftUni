function streetRadar(arr) {
    const speed = +arr[0];
    const road = arr[1];
    let limit, driver;

    if (road === 'residential') {
        limit = 20;
    } else if (road === 'city') {
        limit = 50;
    } else if (road === 'interstate') {
        limit = 90;
    } else if (road === 'motorway') {
        limit = 130;
    }

    const difference = speed - limit;

    if (difference > 0 && difference <= 20) {
        driver = 'speeding';
    } else if (difference <= 40) {
        driver = 'excessive speeding';
    } else {
        driver = 'reckless driving';
    }

    if (difference > 0) {
        console.log(driver);
    }
}
streetRadar([120, 'interstate'])