/*方法一：空间换时间的辅助栈思想
*   额外建立一个辅助栈，记录每一个元素被压入栈时候的整个栈中的最小值
*   元素弹出栈，最小栈中的元素也弹出*/
var MinStack = function () {
    this.x_stack = []
    this.helper_stack = [Infinity]
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.x_stack.push(val)
    this.helper_stack.push(Math.min(this.helper_stack[this.helper_stack.length - 1], val))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.x_stack.pop()
    this.helper_stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.x_stack[this.x_stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.helper_stack[this.helper_stack.length - 1]
};


/*方法二：要求不适用额外空间，只能使用一个栈
*   核心思想：栈中存储新加入的元素和之前栈中最小元素的差值*/
var MinStack = function () {
    this.x_stack = []
    this.min = Infinity
};

MinStack.prototype.push = function (val) {
    if (!this.x_stack.length) {
        this.min = val
        this.x_stack.push(0)
    } else {
        let num = val - this.min
        if (num < 0) {
            //差值小于0，说明新加入的元素更小，更新this.min的值
            this.min = val
        }
        this.x_stack.push(num)
    }
};

MinStack.prototype.pop = function () {
    if (this.x_stack.length) {
        let top = this.x_stack.pop()
        let stacktop
        if (top < 0) {
            //若栈顶元素的值小于零，说明此时this.min中的值就是最小栈中的最小值并且存在于栈顶，这在push中有体现
            stacktop = this.min
            //栈顶元素取走后应更新this.min的值，此时this.min应该是最小栈中被取走的栈顶元素this.min（旧）减去x-stack栈顶的元素
            this.min = this.min - top
        } else {
            //大于零，x-stack中栈顶的元素就是最小栈栈顶元素减去this.min的结果，即 最小栈栈顶元素 = this.min + x_stack栈顶元素
            stacktop = this.min + top
        }
        return stacktop
    } else {
        return undefined
    }
};

MinStack.prototype.top = function () {
    if (this.x_stack.length) {
        //依旧是根据栈顶元素的大小判断返回什么样的值
        let top = this.x_stack[this.x_stack.length - 1]
        //小于零说明栈顶元素就是最小值返回this.min即可
        //大于零说明栈顶元素不是最小值，num = val - this.min所欲需要返回val，即 val = this.min + val
        return top > 0 ? this.min + top : this.min
    } else {
        return undefined
    }
};

MinStack.prototype.getMin = function () {
    //this.min中存储的就是最小栈中的最小值
    return this.min
};