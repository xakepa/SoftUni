function converter(centuries) {
    const year = centuries * 100;
    const days = 365.2422 * year | 0;
    const hours = days * 24;
    const minutes = hours * 60;
    console.log(`${centuries} centuries = ${year} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
converter(1)