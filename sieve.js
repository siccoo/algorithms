// Sieve of Eratosthenes: The purpose of this algorithm is to find and return all the prime numbers up to the 'num' in an array.

function sieveOfEratosthenes(num) {
    let primes = [];
    for (let i = 0; i <= num; i++) {
        primes[i] = true;
    }

    primes[0] = false;
    primes[1] = false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        for (let j = 2; j * i <= num; j++) {
            primes[i * j] = false;
        }
    }

    let result = [];
    for (let i = 0; i < primes.length; i++) {
        if (primes[i]) {
            result.push(i);
        };
    };

    return result;
}

let final = sieveOfEratosthenes(10);
console.log(final);