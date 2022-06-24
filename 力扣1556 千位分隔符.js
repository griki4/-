//官方题解，直接取出末位数进行分离
var thousandSeparator = function(n) {
    let count = 0//计数器，用于计算是否到达三位
    let ans = ''
    do {
        let cur = n % 10
        n = Math.floor(n / 10)
        ans += cur.toString()
        ++count
        if (count % 3 ==0 && n) {
            ans+='.'
        }
    }while (n){
        return ans.split('').reverse().join('')
    }
};



//评论区优质题解，直接转换为字符串进行求解
var thousandSeparator = function(n) {
    //将n变成字符串进行处理
    n = n + ''
    let ans = '', count = 0
    //反向遍历字符串
    for (let i = n.length -1; i > 0; i--) {
        ans = n[i] + ans
        count++
        if (count % 3 ===0 && i != 0){
            ans = ans + '.'
            count = 0
        }
    }
    return ans
};

