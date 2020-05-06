function lowerOrUpper(char) {

    if (char.charCodeAt(0) > 90) {
        console.log('lower-case');
    } else {
        console.log('upper-case');
    }
}
lowerOrUpper('f')