function checkSameNumbers(num) {
    const allNums = [...String(num)].map(Number)

    function checkNumbs(array) {
        const firstNumOfArray = allNums[0];
        let result;

        for (const n of allNums) {
            if (n !== firstNumOfArray) {
                return console.log('false');
            }
            result = 'true';
        }
        return console.log(result);
    }
    checkNumbs(allNums);
    const sumAll = allNums.reduce((acc, sum) => acc + sum, 0);
    console.log(sumAll);
}
checkSameNumbers(1234)