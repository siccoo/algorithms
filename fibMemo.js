// Memoized fibonacci is an algorithm that takes in 2 parameters in its function and it is more better than the plain fibonacci algorithm because in this it has the cache which is an array of memory, while index is the numbers in the fibonacci sequence.

// What is Memoization? is the process by which it checks to see if the number already exists in the cache. Then if number is in the cache it uses that/the number while if number is not in the cache, it calculates it and puts it in the cache so it can be used multiple times in future or for future purpose.

// This our new fibonacci algorithm, its runtime: O(n) - linear

function fibMemo(index, cache) {
    cache = cache || [];
    if (cache[index]) {
        return cache[index];
    } else {
        if (index < 3) {
            return 1;
        } else {
            cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
        }
    }

    return cache[index];
}

let result = fibMemo(50);
console.log(result);