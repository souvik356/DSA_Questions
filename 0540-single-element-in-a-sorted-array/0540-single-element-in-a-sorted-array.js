/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(arr) {
    let l = 0
    let r = arr.length - 1
    
    while(l <= r) {
        let mid = Math.floor((l + r)/2)
        if(arr[mid-1] == arr[mid]){
            let length = mid-l-1
            if(length % 2 !== 0){
                r = mid-2
            }
            else{
                l = mid+1
            }
        }
        else if(arr[mid] == arr[mid+1]){
            let length = r-mid-1
            if(length % 2 !== 0){
                l = mid + 2
            }
            else{
                r = mid - 1
            }
        }
        else{
            return arr[mid]
        }
    }
};