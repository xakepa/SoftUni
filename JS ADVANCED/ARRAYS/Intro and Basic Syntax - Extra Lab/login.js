function login(inputArray) {

    const userName = inputArray.shift();

    const reverseString = function (word) {
        const splited = word.split('');
        const reversed = splited.reverse().join('');
        return reversed;
    }

    for (let i = 0; i < inputArray.length; i += 1) {
        if (userName == reverseString(inputArray[i])) {
            console.log(`User ${userName} logged in.`);
            break;
        } else {
            if (i == 3) {
                console.log(`User ${userName} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }
    }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])