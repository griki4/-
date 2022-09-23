//构建哈希表来记录每一次操作的结果，出现重复结果直接pass
var isHappy = function (n) {
    let map = new Map()
    //操作函数，取出每个位置的数并且平方后相加
    const getSum = (num) => {
        let sum = 0
        while (num) {
            sum += (num % 10) ** 2
            num = Math.floor(num / 10)
        }
        return sum
    }

    while (true) {
        if (map.has(n)) return false
        if (n === 1) return true
        map.set(n, 1)
        n = getSum(n)
    }
};