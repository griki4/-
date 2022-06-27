// 将所有的0移动到数组的末尾


//1.非零元素覆盖，最后将数在数组末尾添加上对应数量的零
var moveZeroes = function(nums) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i]
            j++
        }
    }
    for (let i = j; i < nums.length; i++) {
        nums.push(0)
    }
    return nums
};


//2.双指针，右指针指向非零元素的时候直接交换两个指针所指的元素
//如此一来，左指针和右指针之间就都是0了
var moveZeroes = function(nums) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i],nums[j]] = [nums[j], nums[i]]
            j++
        }
    }
}
