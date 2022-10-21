//偷鸡法
var replaceSpace = function(s) {
    return s.split(' ').join('%20')
};

//老实人版本
var replaceSpace = function(s) {
    s = s.split('')
    let oldLength = s.length
    let spaceCount = 0
    for (let i = 0; i < oldLength; i++){
        if (s[i] === ' ') spaceCount++
    }
    s.length = oldLength + spaceCount * 2
    for (let i = oldLength - 1, j = s.length - 1; i >= 0; i--, j--){
        if (s[i] !== ' ') s[j] = s[i]
        else {
            s[j] = '0'
            s[j-1] = '2'
            s[j-2] = '%'
            j -= 2
        }
    }
    return s.join('')
};