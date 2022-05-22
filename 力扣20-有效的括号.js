//基础数据结构 栈
//遇到左括号就压入栈，遇到右括号就将栈顶的元素弹出并且匹配，匹配不上就不是有效的括号
var isValid = function(s) {
    let n = s.length
    if (n % 2) {
        return false
    }
    let stack = []
    for (let s1 of s) {
        if (s1 === '(' || s1 === "[" || s1 === '{') {
            stack.push(s1)
        }else {
            if (s1 === ')' && stack.pop() !== '(') {
                return false
            }
            if (s1 === ']' && stack.pop() !== '[') {
                return false
            }
            if (s1 === '}' && stack.pop() !== '{') {
                return false
            }
        }
    }
    return !stack.length
};


//哈希表解法
var isValid = function(s) {
    s = s.split('')
    let n = s.length
    if (n % 2) {
        return false
    }
    let stack = []
    let map = new Map([[')','('],[']','['],['}','{']])
    for (let i of s) {
        if (map.get(i)) {
            if (stack[stack.length - 1] !== map.get(i)) {
                return false
            }
            stack.pop()
        }else {
            stack.push(i)
        }
    }
    return !stack.length
};

