/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let mapS = {}

    for(let i=0;i<s.length;i++){
        !mapS[s[i]] ? mapS[s[i]] = 1: ++mapS[s[i]]
    }

    console.log(mapS)
    for(let i=0;i<t.length;i++){
        if(!mapS[t[i]]){
            return false
        }
        else{
            --mapS[t[i]]
        }
    }
    return true
};