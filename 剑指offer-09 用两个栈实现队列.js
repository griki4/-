//入队栈中元素依次取出并放入另一个栈，该栈就是出队栈
//核心思想就是要将入队栈中的所有元素取出放入出队栈
var CQueue = function() {
    this.is = []
    this.os = []
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    return this.is.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (!this.os.length && !this.is.length) {
        return -1
    }
    if(!this.os.length) {
        while (this.is.length) {
            this.os.push(this.is.pop())
        }
    }
    return this.os.pop()

};