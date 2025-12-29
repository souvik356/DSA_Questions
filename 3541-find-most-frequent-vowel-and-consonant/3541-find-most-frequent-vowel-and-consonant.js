/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = new Map()
    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=1
        }else{
            ++map[s[i]]
        }
    }
    let vowelCount = 0
    let consonentCount = 0
    const vowelArr = ['a','e','i','o','u']
    for(let i=0;i<s.length;i++){
        if(vowelArr.includes(s[i])){
            if(map[s[i]] > vowelCount){
                vowelCount = map[s[i]]
            }
        }
        else{
            if(map[s[i]] > consonentCount){
                consonentCount = map[s[i]]
            }
        }
    }
    return vowelCount+consonentCount
};