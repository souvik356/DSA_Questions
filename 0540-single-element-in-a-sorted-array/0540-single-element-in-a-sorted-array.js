/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l = 0
    let r = nums.length - 1

    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(nums[mid-1] == nums[mid]){
            let len = mid-l-1
            if(len%2 !== 0){
                r = mid-2
            }
            else{
                l = mid+1
            }
        }
        else if(nums[mid] == nums[mid+1]){
            let len = r-mid-1
            if(len%2 !== 0){
                l = mid+2
            }
            else{
                r = mid-1
            }
        }
        else{
            return nums[mid]
        }
    }
};