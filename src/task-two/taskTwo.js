function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }

    for (let i = 3; i * i <= n; i+=2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(2));
