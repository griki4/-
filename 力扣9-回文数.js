//双指针
var isPalindrome = function(x) {
    x = x.toString().split('')
    let flag = true, right = x.length - 1
    for (let i = 0; i < x.length/2; i++) {
        if (x[i] !== x[right]) {
            flag = false
            break
        }
    }
    return flag
};


//字符串反转
var isPalindrome = function(x) {
    return x === x.toString().split('').reverse().join('')
};