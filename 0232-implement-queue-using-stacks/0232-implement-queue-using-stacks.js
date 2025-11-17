
var MyQueue = function() {
    this.s1 = []
    this.s2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let len = this.s2.length
    if(len){
        let element = this.s2.pop()
        return element
    }else{
        let len = this.s1.length
        for(let i=0;i<len-1;i++){
            let element = this.s1.pop()
            this.s2.push(element)
        }
        let popedElement = this.s1.pop()
        return popedElement
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let len = this.s1.length
    if(this.s2.length == 0){
        for(let i=0;i<len;i++){
            let element = this.s1.pop()
            this.s2.push(element)
        }
    }
    return this.s2[this.s2.length-1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length ==0 && this.s2.length == 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */