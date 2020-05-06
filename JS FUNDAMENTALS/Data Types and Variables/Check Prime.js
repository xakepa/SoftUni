function prime(num) {
    let prime = true;

    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i == 0 && i < num) {
            prime = false;
        }
    }
    return prime;
}
console.log(prime(10))