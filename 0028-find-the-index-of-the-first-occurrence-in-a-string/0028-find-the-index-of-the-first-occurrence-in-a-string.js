/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let h = haystack.length
    let n = needle.length

    for(let i=0;i<=h-n;i++){
        let j=0
        for(j=0;j<n;j++){
            if(haystack[i+j] !== needle[j]){
                break
            }
        }
        console.log(j,n)
        if(j==n){
            return i
        }
    }
    return -1
};