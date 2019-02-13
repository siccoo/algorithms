function caesarCipher(str, num){
    let lowerCaseString = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newString = '';

    for (let i = 0; i < lowerCaseString.length; i++){
        let currentLetter = lowerCaseString[i];
        if (currentLetter = ' '){
            newString += currentLetter;
            continue;
        }
    }
}