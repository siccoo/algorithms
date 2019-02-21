// Fibonacci algorithm is an algorithm that runs sequencially and that every number is a sum of the two first numbers.
// Fibonacci is a very bad algorithm that crashes the system if you increased the number in the fibonacci sequence. It has very bad runtime exponentially.

function fibonacci(position) {
    if (position < 3) {
        return 1;
    } else {
        return fibonacci(position - 1) + fibonacci(position - 2);
    };
};

let result = fibonacci(10);
console.log(result);