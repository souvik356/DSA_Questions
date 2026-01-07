/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = {}
    for(let i=0;i<s.length;i++){
        map[s[i]] ? ++map[s[i]] : map[s[i]] = 1
    }

    // console.log(map)
    let vowelCount = 0
    let consonentCount = 0
    const vowelArr = ['a','e','i','o','u']

    for(let i=0;i<s.length;i++){
        if(vowelArr.includes(s[i])){
            vowelCount = Math.max(map[s[i]],vowelCount)
        }
        else{
            consonentCount = Math.max(map[s[i]],consonentCount)
        }
    }
    // console.log(vowelCount,consonentCount)
    return vowelCount + consonentCount
};