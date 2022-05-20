//暴力解法，将两个数组直接合并然后再排序

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2)
    nums1.sort((a, b) => a - b)
};

//双指针法
//给定的数组已经是排序了，所以分别设定两个指针指向两个数组的头部，
//每一次都比较指针所指的数的大小，将较小的加入新数组直到所有元素都被添加进新数组
var merge = function(nums1, m, nums2, n) {
    let p1 = 0, p2 = 0//两个用于指向数组头部元素的指针
    const sorted = new Array(m + n).fill(0)
    var cur//cur表示当前要填入新数组中的元素
    while (p1 < m || p2 < n) {
        if (p1 === m) {
            cur = nums2[p2++]
        } else if (p2 === n) {
            cur = nums1[p1++]//某个指针指到头了，直接转向另一个指针
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums1[p1++]
        } else {
            cur = nums2[p2++]//将较小的数组加入新数组并且移动指针
        }
        sorted[p1 + p2 - 1] = cur
    }
    for (let i = 0; i != m + n ; ++i) {
        nums1[i] = sorted[i]
    }
};

//逆向双指针方法（最优解法）
//其实就是反过来，这回两个指针指向数组的最后
//这次可以直接将元素加入nums1
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1
    let tail = m + n - 1
    var cur
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) {
            cur = nums2[p2--]
        } else if (p2 === -1) {
            cur = nums1[p1--]
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums2[p2--]
        } else {
            cur = nums1[p1--]
        }
        nums1[tail--] = cur
    }
};



