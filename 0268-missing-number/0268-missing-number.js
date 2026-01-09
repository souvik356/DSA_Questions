/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let totalLength = nums.length + 1
    let totalSum = (totalLength * (totalLength-1))/2
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
    }
    return totalSum-sum
};