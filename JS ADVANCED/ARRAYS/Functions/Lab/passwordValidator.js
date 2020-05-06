function passwordValidator(password) {

    const checkLength = function (str) {
        if (str.length >= 6 && str.length <= 10) {
            return true;
        }
        return false;
    }

    let digitsCounter = 0;

    const checkCharsAndDigits = function (pass) {
        const chars = [...pass];
        let validChar = true;

        for (char of chars) {

            if ((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)
                || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) {
                if (Number(char) + 5) {
                    digitsCounter++
                }
            } else {
                validChar = false;
            }
        }
        return validChar
    }

    if (checkLength(password) && checkCharsAndDigits(password) && digitsCounter >= 2) {
        console.log('Password is valid');
    }

    if (!checkLength(password)) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!checkCharsAndDigits(password)) {
        console.log('Password must consist only of letters and digits');
    }

    if (digitsCounter < 2) {
        console.log('Password must have at least 2 digits');
    }
}
passwordValidator('logIn')