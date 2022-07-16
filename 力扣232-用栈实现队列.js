/*核心思想在于栈的设计
*   入队栈中的元素依次弹出并且压入出队栈
*   由此实现了元素的反序排列，从而达到队列的效果
*   每次执行出队相关的操作的时候，出队栈中没有元素*/
var MyQueue = function() {
    this.is = []//初始化入队栈
    this.os = []//初始化出队栈
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.is.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (!this.os.length) {//出队栈中没有元素的时候就需要去入队栈中取
        while (this.is.length) {//取出入队栈中的所有元素
            this.os.push(this.is.pop())
        }
    }
    return this.os.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    //返回队列开头的元素
    if (!this.os.length) {
        while (this.is.length) {
            this.os.push(this.is.pop())
        }
    }
    return this.os[this.os.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.is.length && !this.os.length
};