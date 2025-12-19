/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1,-1]

    let l = 0
    let r = nums.length - 1

    while(l < r) {
        let mid = Math.floor((l + r)/2)
        if(nums[mid] < target){
            l = mid + 1
        }
        else{
            r = mid
        }
    }

    if(nums[l] == target) result[0] = l

     l = 0
     r = nums.length - 1

    while(l < r) {
        let mid = Math.ceil((l + r)/2)
        if(nums[mid] > target){
            r = mid - 1
        }
        else{
            l = mid
        }
    }

    if(nums[l] == target) result[1] = l

    return result
};