var search = function(nums, target) {
    for (let i = 0; i <nums.length; i++) {
        if (nums[i] === target) {
            return i
        }else {
            return -1
        }
    }
};


//二分查找方法
var search = function(nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left
        const num = nums[mid]
        if (num === target) {
            return mid
        }else if (num > target) {
            right = mid - 1
        }else {
            left = mid + 1
        }
    }
    return -1
};
