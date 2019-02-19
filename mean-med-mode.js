// Q: Take in a number array as a parameter and return an object with 3 properties Mean, Median, Mode.
// Build out 4 separate functions. 
// getMean, getMedian, getMode, meanMedianMode that calls the other 3 functions to return object. 

//Math and function programming - breaking down into separate functions that can be reused.
// Mean is getting the average. Total number divided by how many numbers.
// Median, once ordered the most middle number.
// Mode, the number that occurs the most amount of times.

// Assess meanMedianMode: call the other 3 and return object with the keys and those values.
function meanMedianMode(array) {
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    }
}

// Assess Mean: Sum all the array values and divide by array.length (do basic loop not reduce)
function getMean(array) {
    let sum = 0;
    array.forEach(num => {
        sum += num;
    });

    let mean = sum / array.length;
    return mean;
}

// Assess Median: Sort the array and return array[array.length/2]
function getMedian(array) {
    array.sort((c, d) => {
        return c - d
    });
    let median;

    if (array.length % 2 !== 0) {
        median = array[Math.floor(array.length / 2)];
        //if even number of elements, grab 2 middle
    } else {
        let mid1 = array[(array.length / 2) - 1];
        let mid2 = array[array.length / 2];
        median = (mid1 + mid2) / 2;
    }

    return median;
}

// Assess Mode: Count the occurances of each element into an obj.
// Loop through property in object to see which number is most frequent using for key in object. Now have access to property/key.
// keep track of max frequency
// create var maxFreq = 0; how often the current mode shows up
// declare modes = []; check if current freq is greater than max freq
// EdgeCase: if current is equal to max, push it into modes array
// if there is no mode? if modes.length = modeObj.length, then modes = [];
function getMode(array) {
    let modeObj = {};

    // create modeObj
    array.forEach(num => {
        if (!modeObj[num]) {
            modeObj[num] = 0;
        }
    // since no Else; regardless do this:
        modeObj[num]++;
    });

    // create array of modes
    let maxFrequency = 0;
    let modes = [];
    for (let num in modeObj) {
        if (modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
        } else if (modeObj[num] === maxFrequency) {
            modes.push(num);
        };
    };

    // Object.keys to give us value of many properties in modeObj
    if (modes.length === Object.keys(modeObj).length) {
        modes = [];
    };

    return modes
}

let result = meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]);

console.log(result);

let res = meanMedianMode([4, 2, 1, 1, 3, 4, 6, 7, 4]);
console.log(res);