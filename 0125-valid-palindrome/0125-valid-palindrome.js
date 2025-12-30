/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str=""
    s=s.toLowerCase()
    for(let i=0;i<s.length;i++){
        if(s[i].match(/[a-zA-Z0-9]/)){
            str=str+s[i]
        }
    }
    let len = str.length
    for(let i=str.length-1;i>=0;i--){
        if(str[i] !== str[len-i-1]){
            return false
        }
    }

    return true
};