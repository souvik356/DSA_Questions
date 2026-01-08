/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let countR = 0
    let countL = 0 
    let count = 0 
    for(let i=0;i<s.length;i++){
        if(s[i] == 'R'){
            countR+=1
            if(countR==countL){
                count+=1
                countR=0
                countL=0
            }
        }
        else{
            countL+=1
            if(countR==countL){
                count+=1
                countR=0
                countL=0
            }
        }
    }
    return count
};