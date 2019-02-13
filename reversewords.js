function reverseWords (string) {
    let wordArr = string.split(' ');
    let reverseWordArr = [];

    wordArr.forEach(word => {
        let reversedWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];  
        }
        reverseWordArr.push(reversedWord);
    });

     return reverseWordArr.join(' ');
}
console.log(reverseWords('this is a string of javascript'))