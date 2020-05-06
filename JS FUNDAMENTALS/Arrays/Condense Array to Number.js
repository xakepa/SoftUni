function condenseArray(nums) {

    while (nums.length > 1) {
        let merged = [];
        for (let i = 0; i < nums.length - 1; i += 1) {
            merged.push(nums[i] + nums[i + 1])
        }
        nums = merged;
    }
    console.log(nums.join(''));
}
condenseArray([5, 0, 4, 1, 2])