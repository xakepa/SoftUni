function checkPalindromes(array) {

    const reverseString = (string) => string.split('').reduce((char, prev) => prev + char, '');
    // variant 2 
    // const reverseString = (string) => [...string].reverse().join('');

    for (num of array) {
        if (num == reverseString(String(num))) { // attention comparing number with string
            console.log('true');                  // that's why using == 
        } else {
            console.log('false');
        }
    }
}
checkPalindromes([123, 323, 421, 121])