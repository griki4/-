//爬到第n级台阶的方法等于爬到第n-1级和n-2级台阶的方法之和
var climbStairs = function(n) {
    if (n === 1) {
        return 1
    }else if (n === 2) {
        return 2
    }else {
        return climbStairs(n - 1) + climbStairs(n - 2)
    }
};

//优化方法一：针对时间复杂度的优化
//将爬到第n级楼梯的方法都保存起来，不用每次都计算
//时间复杂度为O(1) 空间复杂度为O(n)
var climbStairs = function(n) {
    const dp = []
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n ; i++) {
        dp[i] = dp[i - 1] + dp [i - 2]
    }
    return dp[n]
};

//只需要保存n -1 和 n -2级台阶的方法
//滚动数组，也就是一个队列结构
var climbStairs = function(n) {
    let p = 0,q = 0,r = 1
    for (let i = 1; i <= n; i++) {
        p = q
        q = r
        r = p + q
    }
    return r
};
