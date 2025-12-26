/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let l = 0
    let r = arr.length - 1

    while(l < r){
        let mid = Math.floor((l+r)/2)

        if((arr[mid+k]-x) < (x-arr[mid])){
            l = mid+1
        }else{
            r = mid
        }
    }
    return arr.slice(l,l+k)
};