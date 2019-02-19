function twoSum(numArray, sum) {
    let pairs = [];
    let hashtable = [];

    for (let i = 0; i < numArray.length; i++) {
        let currNum = numArray[i];
        let counterpart = sum - currNum;
        if (hashtable.indexOf(counterpart) !== -1) {
            pairs.push([ currNum, counterpart ]);
        }
        hashtable.push(currNum);
    }

    return pairs;
}

let result = twoSum([1, 2, 4, 6, 5, 3], 7);
console.log(result)

let res = twoSum([40, 11, 17, 35, -12], 28);
console.log(res)