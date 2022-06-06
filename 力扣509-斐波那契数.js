//1.动态规划，记录所有的数
var fib = function(n) {
    let fib = []
    fib[0] = 0
    fib[1] = 1
    for(let i = 2; i<=n; i++) {
        fib[i] = fib[i-1]+fib[i-2]
    }
    return fib[n]
};


//2.滚动数组，只记录当前项和前两项
var fib = function(n) {
    let p = 0, q = 0, r = 1
    for(let i = 1; i <= n; i++) {
        p = q
        q = r
        r = p + q
    }
    return q
};