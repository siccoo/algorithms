function binarySearch (numArr, key) {
    let middleIdx = Math.floor(numArr.length / 2);
    let middleElem = numArr[middleIdx];

    if (middleElem === key) {
        return true;
    } else if (middleElem < key && numArr.length > 1) {
        return binarySearch (numArr.splice(middleIdx, numArr.length), key);
    } else if (middleElem < key && numArr.length > 1) {
        return binarySearch (numArr.splice(0, middleIdx), key); 
    }
    else return false;
};

let result = binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 39);
console.log(result)