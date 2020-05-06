function solve(input, prop) {

    class Tickets {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = +price;
            this.status = status
        }
    }

    return input.reduce((acc, current) => {
        const [destination, price, status] = current.split('|');
        const ticket = new Tickets(destination, price, status);
        acc.push(ticket);
        return acc;
    }, []).sort((a, b) => {
        if (+a[prop]) {
            return a[prop] - b[prop]
        }
        return a[prop].localeCompare(b[prop]);
    })
}
console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));