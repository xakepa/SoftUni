function solve(name, area, population, country, postCode) {
    const city = {
        name,
        area,
        population,
        country,
        postCode
    }

    Object.entries(city).forEach(x => console.log(x.join(' -> ')))

    // for (const key in city) {
    //     console.log(key, '->', city[key]);
    // }
}
solve('Sofia', '492', '1238438', 'Bulgaria', '1000')