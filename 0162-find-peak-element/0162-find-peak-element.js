/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l=0
    let r = nums.length - 1

    while(l < r){
        let mid = Math.floor((l+r)/2)
        if(nums[mid+1]>nums[mid]){
            l = mid + 1
        }
        else{
            r = mid
        }
    }

    return l
};