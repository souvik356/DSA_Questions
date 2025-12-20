/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x
    let l = 2
    let r = Math.floor(x/2)

    while(l <= r){
        let mid = Math.floor((l + r)/2)
        // console.log(mid)
        if(mid*mid === x) { 
            return mid
        }

        else if(mid*mid > x){
            r = mid - 1
        }
        else{
            l = mid + 1
        }
    }
    return r
};

// l = 2
// r = 4  mid = 3

// l=2
// r=2
