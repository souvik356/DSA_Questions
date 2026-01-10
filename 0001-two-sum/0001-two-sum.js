/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map={}
    for(let i=0;i<nums.length;i++){
        map[nums[i]] = i
    }
    for(let j=0;j<nums.length;j++){
        let numberToFind = target - nums[j]
        if(map[numberToFind] && j !== map[numberToFind]){
            return [j,map[numberToFind]]
        }
    }
};