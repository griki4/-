//哈希表方法，遍历数组将遍历的元素都存放在哈希表中
//JavaScript中使用哈希表一般是通过使用Map这种数据结构来实现的
var findRepeatNumber = function(nums) {
    let map = new Map()
    for (let num of nums) {
        if (map.has(num)) return num
        map.set(num, 1)
    }
    return null
};