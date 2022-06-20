var reverseString = function(s) {
    let p = s.reverse()
    return p
};


//双指指针法
//定义两个指针分别指向数组的第一个和最后一个元素，每次交换元素并且指针相向移动直到相遇
var reverseString = function(s) {
    let right = s.length
    for (let left = 0; left < right; right-- ,left++) {
        [s[left], s[right]] = [s[right], s[left]]
    }
    return s
};
