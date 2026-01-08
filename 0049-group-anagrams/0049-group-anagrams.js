/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {}
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i].split('').sort().join('')
        if (!map[word]) {
            map[word] = [strs[i]]
        }
        else {
            map[word].push(strs[i])
        }
    }
    return Object.values(map)
};