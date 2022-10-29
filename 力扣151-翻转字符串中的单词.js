//双端队列方法
var reverseWords = function(s) {
    //双端队列
    let left = 0, right = s.length - 1
    let res = []
    let word = ''
    while(s.charAt(left) === ' ') left++
    while(s.charAt(right) === ' ') right--
    while(left <= right){
        if(s.charAt(left) === ' ' && word){
            res.unshift(word)
            left++
        }else if(s.charAt(left) !== ' '){
            word += s.charAt(left)
        }
        left++
    }
    res.unshift(word)
    return res.join(' ')
};

//偷鸡法
var reverseWords = function (s){
    return s.trim().split(/\s+/).reverse().join(' ')
}
