//类似字符串相加的题目，使用逆向双指针和ASCII码表转换为数字进行计算
//定义进位变量carry来控制进位
var addBinary = function(a, b) {
    const ans = []
    let i = a.length - 1, j = b.length - 1, carry = 0
    while (i >= 0 || j >=0 || carry !== 0) {
        let x = i >= 0 ? a.charAt(i) - '0':0
        let y = j >= 0 ? b.charAt(j) - '0':0
        let result = x + y + carry
        ans.push(result % 2)
        carry = Math.floor(result / 2)
        i--
        j--
    }
    return ans.reverse().join('')
};


var addBinary = function(a, b) {
    let x = '0b' + a
    let y = '0b' + b
    let sum = BigInt(x) + BigInt(y)
    //toString方法的参数表示转换为字符串后数字的进制
    return sum.toString(2)
};