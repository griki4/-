//暴力解法，直接对数组的所有元素
var sortedSquares = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i]
    }
    nums.sort((a, b) => {
        return a - b
    })
    return nums
};

//双指针解法
/*1.第一个指针（实际上是两个）去寻找平方后的数组中值最大的元素
* 2.第二个指针将第一个指针找到的元素不断放入新数组并更新下标*/
var sortedSquares = function (nums) {
    //定义更新数组的指针
    let k = nums.length - 1, result = new Array(nums.length).fill(0)//初始化一个和nums等长但是元素都为0的数组
    let i = 0, j = nums.length - 1
    //边界条件必须是有等于的，否则i=j时指针指向的元素无法进入循环就会被漏掉
    while (i <= j) {
        if (nums[i] * nums[i] > nums[j] * nums[j]) {
            result[k--] = nums[i] * nums[i]
            i++
        }else {
            result[k--] = nums[j] * nums[j]
            j--
        }
    }
    return result
}