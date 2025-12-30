/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s=s.split('')
    console.log(s)
    for(let i=0;i<s.length;i=i+(2 * k)){
        let n=k
        let mid = Math.floor(n/2)
        for(let j=0;j<mid;j++){
            let temp = s[n+i-j-1]
            s[n+i-j-1] = s[i+j]  
            s[i+j] = temp
        }
    }
    return s.join('')
};