function reverseArrayInPlace (arr) {
    for (let i = 0; i < arr.length / 2; i++) {
      let tempLet = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = tempLet;       
    }
    
    return arr;
}

// let result = reverseArrayInPlace(['this is it', 'baby']);
let result = reverseArrayInPlace([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
console.log(result)