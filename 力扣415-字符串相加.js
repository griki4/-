//和合并有序数组一样的算法
//逆向双指针
var addStrings = function(num1, num2) {
    let i = num1.length - 1, j = num2.length - 1, carry = 0;
    //add表示进位
    const ans = [];
    while (i >= 0 || j >= 0 || carry != 0) {
        const x = i >= 0 ? num1.charAt(i) - '0' : 0;
        const y = j >= 0 ? num2.charAt(j) - '0' : 0;
        //利用了编码表将取出的单个字符变成了数字
        //指针指空的时候将指针所指的数变成0
        const result = x + y + add;//当前结果等于指针所指的数加上进位上的数
        ans.push(result % 10);//结果数组里只保留小于10的部分，也就是结果的各位
        carry = Math.floor(result / 10);//结果值除以10取整后就是进位上的数
        i -= 1;
        j -= 1;
        //当前加法完成，移动指针
    }
    return ans.reverse().join('');
    //最后进入数组的应该在最前面，返回的结果应该是一个字符串
};