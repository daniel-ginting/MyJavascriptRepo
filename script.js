var isPalindrome = function(x) {
    let arr = [];
    for (let i = x.length - 1; i >= 0; i--) {
        arr.push(x[i])
    }
    if (arr.join('') === x){
        return true
    } else {
        return false
    }
};

isPalindrome('sjdjdf')