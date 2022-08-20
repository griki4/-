var search = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        } else {
            return -1
        }
    }
};


//二分查找方法(左闭右闭区间写法)
var search = function (nums, target) {
    let left = 0, right = nums.length - 1
    //左闭右闭区间允许边界相等
    while (left <= right) {
        //寻找位于数组中间的元素
        const middle = left + Math.floor((right - left) / 2)
        if (nums[middle] > target) {//更新右边界，并且右边界不应该包含nums[middle]这个元素
            right = middle - 1
        } else if (nums[middle] < target) {//更新左边界，同样不包含nums[middle]这个元素
            left = middle + 1
        } else {
            return middle
        }
    }
    return -1
};


//二分查找方法（左闭右开区间写法）
var search = function (nums, target) {
    let left = 0, right = nums.length//右区间是开的，并不包含right本身，直接使用nums的长度即可
    //左闭右开区间不允许边界相等
    while (left < right) {
        const middle = left + Math.floor((right - left) / 2)
        if (nums[middle] > target) {
            right = middle
        } else if (nums[middle] < target) {
            left = middle + 1
        } else {
            return middle
        }
    }
    return -1
}
