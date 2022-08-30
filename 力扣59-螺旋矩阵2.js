var generateMatrix = function (n) {
    //定义起始位置
    let startX = 0, startY = 0
    //定义需要转多少圈
    let loop = Math.floor(n / 2)
    //寻找中间位置
    let mid = Math.ceil(n / 2)
    //定义区间终止位置，初始值为1
    let offset = 1
    //定义需要填充进矩阵的数字
    let count = 1
    //创建一个空的矩阵
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0))

    while (loop--) {
        //第一条边，从左到右
        let row = startX, col = startY
        for (; col < startY + n - offset; col++) {
            res[row][col] = count++
        }
        //第二条边，从上之下
        for (; row < startX + n - offset; row++) {
            res[row][col] = count++
        }
        //第三条边，从右到左
        for (; col > startY; col--) {
            res[row][col] = count++
        }
        //第四条边，从下到上
        for (; row > startX; row--) {
            res[row][col] = count++
        }

        //转完一圈之后，起始位置变化
        startX++
        startY++
        //关于终止位置的变量也增加
        offset += 2
    }
    //考虑n为奇数的特殊情况
    if (n % 2 === 1) {
        res[mid][mid] = count
    }

    return res
};