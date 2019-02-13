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
console.log(isPalindrome("race car"));

// PALINDROME'S METHODS 
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

console.log(palindrome('ada'))

// METHOD TWO ON PALINDROME
function pal(x) {
    let A = x.split('').reverse().join('');
    return x === A
}
console.log(pal('eve'))
