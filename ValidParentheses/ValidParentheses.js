/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const open = ['(', '{', '['];
    const close = [')', '}', ']'];
    let arr = s.split('')
    let arrOpen = [];

    let check

    if (arr.length > 1){
        for(let i = 0; i < arr.length; i++){
            if (open.includes(arr[i]) && arr[i + 1] !== undefined){
                arrOpen.push(arr[i]);
            } else if (close.includes(arr[i])) {
                if (arr[i] === ')' && arrOpen[arrOpen.length - 1] === '(') {
                    arrOpen.pop()
                } else if (arr[i] === '}' && arrOpen[arrOpen.length - 1] === '{'){
                    arrOpen.pop()
                } else if (arr[i] === ']' && arrOpen[arrOpen.length - 1] === '['){
                    arrOpen.pop()
                } else if (i === 0){
                    return false
                } else {
                    check = false
                }
            } else {
                return false
            }
        }
    } else {
        return false
    }
    if (check === undefined && arrOpen.length === 0) {
        return true
    } else if(check === false || arrOpen.length !== 0){
        return false
    }
};

console.log(valid('([]'))