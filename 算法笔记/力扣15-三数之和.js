var threeSum = function (nums) {
    let res = 0
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return res
        if (nums[i] === nums[i - 1]) continue //a的去重
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum > 0) {
                right--
            } else if (sum < 0) {
                left++
            } else {
                res.push([nums[i], nums[left], nums[right]])
                //b的去重
                while (nums[left + 1] === nums[left]){
                    left++
                }
                //c的去重
                while (nums[right - 1] === nums[right]){
                    right--
                }
                left++
                right--
            }
        }
    }
    return res
}