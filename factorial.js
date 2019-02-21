// Factorial(!);
// 4! = 4 * 3 * 2 * 1 = 24
// 3! = 3 * 2 * 1 = 6

// This factorial function runs in a recursive method and it is used to solve our binary search algorithm.

function factorial(num) {
    if (num === 1) {
        return num;
    } else {
        return num * factorial(num -1);
    }
}

let result = factorial(4);
console.log(result)