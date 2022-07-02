
var isPalindrome = function(s) {
    //正则表达式去掉所有的标点
    s = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase()
    let i = 0, j = s.length - 1
    while (i < j) {
        if (s[i] !== s[j]) {
            return
        }
        i++
        j--
    }
    return true
};


var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase()
    let s2 = s.split('').reverse().join('')
    return s2 === s
}