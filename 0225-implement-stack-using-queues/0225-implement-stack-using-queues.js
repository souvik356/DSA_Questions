
var MyStack = function() {
    this.q1 = []
    this.q2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let len = this.q1.length
    for(let i=0;i<len-1;i++){
        let peekedElement = this.q1.shift()
        this.q2.push(peekedElement)
    }
    let element = this.q1.shift()
    let temp = this.q1
    this.q1 = this.q2
    this.q2 = temp
    return element
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let len = this.q1.length
    for(let i=0;i<len-1;i++){
        let peekedElement = this.q1.shift()
        this.q2.push(peekedElement)
    }
    let element = this.q1.shift()
    this.q2.push(element)
    let temp = this.q1
    this.q1 = this.q2
    this.q2 = temp
    return element
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */