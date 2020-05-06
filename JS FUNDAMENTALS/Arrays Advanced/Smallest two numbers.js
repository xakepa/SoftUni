function smallestTwoNums(array) {
    array.sort((x, z) => x - z);

    console.log(array[0], array[1]);
}
smallestTwoNums([30, 15, 50, 5])