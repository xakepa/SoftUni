function dates(arrayString) {
    const regexPattern = /\b(?<Day>\d{2})(\/|.|-)(?<Month>[A-Z]{1}[a-z]{2})\2(?<Year>\d{4})\b/g;
    const text = arrayString[0];
    let validDates;

    while ((validDates = regexPattern.exec(text)) !== null) {
        let currentDate = '';
        for (const key in validDates.groups) {
            currentDate += `${key}: ${validDates.groups[key]}, `
        }
        currentDate = currentDate.substring(0, currentDate.length - 2)
        console.log(currentDate);
    }
}
dates(['13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'])