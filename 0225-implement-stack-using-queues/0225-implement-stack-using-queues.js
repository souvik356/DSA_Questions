
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
    let n1 = this.q1.length
     for(let i=0;i<n1-1;i++){
        let elem = this.q1.shift()
        this.q2.push(elem)
     }
     let poppedElem = this.q1.shift()
     let temp = this.q1
     this.q1 = this.q2
     this.q2 = temp

     return poppedElem
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q1[this.q1.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === this.q2.length
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */