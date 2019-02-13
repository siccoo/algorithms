function isPalindrome(string){
    string = string.toLowerCase();
    let characArr = string.split('');
    let validChar = 'abcdefghijklmnopqrstuvwxyz'.split('');

    let lettersArr = [];
    characArr.forEach(char => {
        if (validChar.indexOf(char) > -1) lettersArr.push(char);
    });
    if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
    else return false
}
let result = isPalindrome("race car");
console.log(result)

// PALINDROME'S METHODS 
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

let res = palindrome('ada');
console.log(res)

// METHOD TWO ON PALINDROME
function pal(x) {
    let A = x.split('').reverse().join('');
    return x === A
}
let resulte = pal('eve');
console.log(resulte)
