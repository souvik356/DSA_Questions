/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    for(let i=0;i<s.length;i++){
        if(s[i] == '(' || s[i] == '{' || s[i] == '['){
            stack.push(s[i])
        }
        else{
            let elem = stack[stack.length - 1]
            if((elem == '(' && s[i] == ')') || (elem == '[' && s[i] == ']') || (elem == '{' && s[i] == '}')){
                stack.pop()
            }
            else if(s[i]==')' || s[i]==']' || s[i] == '}'){
            return false
        }
        }
    }

    return stack.length === 0
};