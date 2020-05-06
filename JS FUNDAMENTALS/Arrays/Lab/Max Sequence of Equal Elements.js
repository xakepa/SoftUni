function maxSequence(array) {

    let sequence = [];
    let sequenceLength = 1;
    let max = 0;
    let currentNum = 0;

    for (let i = 0; i < array.length; i += 1) {
        if (array[i] == array[i + 1]) {
            sequenceLength += 1;
            if (sequenceLength > max) {
                max = sequenceLength;
                currentNum = array[i];
            }
        } else {
            sequenceLength = 1;
        }
    }
    currentNum = currentNum.toString() + ' ';
    console.log(currentNum.repeat(max));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])