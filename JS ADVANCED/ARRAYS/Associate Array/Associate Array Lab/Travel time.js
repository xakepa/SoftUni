function travelTIme(arrOfStrings) {
    const countries = {};

    arrOfStrings.forEach(elements => {
        let [country, town, currentPrice] = elements.split(' > ')
        currentPrice = +currentPrice;
        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
            countries[country][town] = currentPrice;
        } else {
            const countryObj = countries[country];
            if (!countryObj.hasOwnProperty(town)) {
                countryObj[town] = currentPrice;
            } else {
                let oldPrice = countryObj[town];
                if (oldPrice > currentPrice) {
                    countryObj[town] = currentPrice;
                }
            }
        }
    });

    const sortedCountries = Object.entries(countries)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, towns] of sortedCountries) {
        const sortedTowns = Object.entries(towns)
            .sort((a, b) => a - b);
        let output = `${name} -> `;
        for (const [townName, townPrice] of sortedTowns) {
            output += `${townName} -> ${townPrice} `;
        }
        console.log(output);
    }
}
travelTIme([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"])