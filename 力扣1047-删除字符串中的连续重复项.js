//匹配类型的问题都是栈的强项
var removeDuplicates = function(s) {
    const stk = [];
    //直接遍历字符串
    for (const ch of s) {
        //如果栈顶元素和当前遍历元素相等，则直接将元素弹出栈
        if (stk.length && stk[stk.length - 1] === ch) {
            stk.pop();
        } else {
            stk.push(ch);
        }
    }
    return stk.join('');
};
