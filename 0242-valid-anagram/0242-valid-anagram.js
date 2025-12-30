/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let map={}

    for(let i=0;i<s.length;i++){
        if(map[s[i]]){
            ++map[s[i]]
        }else{
            map[s[i]] = 1
        }
    }

    // console.log(map)

    for(let j=0;j<t.length;j++){
        if(!map[t[j]]){
            return false
        }else{
            --map[t[j]]
        }

    }

    return true
};