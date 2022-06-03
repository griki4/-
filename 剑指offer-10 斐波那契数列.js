//1.动态规划
//这个问题很类似之前力扣的第70题 爬楼梯
//记得最终的结果需要取模
var fib = function(n) {
    let MOD = 1000000007
    if (n < 2) {
        return n
    }
    let p = 0, q = 0, r = 1
    for (let i = 2; i <= 2; i++) {
        p = q
        q = r
        r = (p + q) % MOD
    }
    return r
};


//采用跟爬楼梯一样的写法
var fib = function (n) {
    let dp = [0, 1]
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1000000007
    }
    return dp[n]
}