/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) { 
    let R=0
    let L=0
    let count = 0
    for(let i=0;i<s.length;i++){
        if(s[i] == 'R'){
            R+=1
            if(R==L){
                count+=1
                L=0
                R=0
            }
        }
        else if(s[i] == 'L'){
            L+=1
            if(R==L){
                count+=1
                L=0
                R=0
            }
        }
    }
    return count
};