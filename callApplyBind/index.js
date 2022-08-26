// tie the function to an object(context)
Function.prototype.mycall = function(context, ...args) {

    const symbol = Symbol();
    
    context = Object(context || window);
    context[symbol] = this;
    const result = context[symbol](...args);
    delete context[symbol];
    return result;
}
//same as above
Function.prototype.myapply = function(context, args) {
    const symbol = Symbol();
    
    context = Object(context || window);
    context[symbol] = this;
    const result = context[symbol](...args);
    delete context[symbol];
    return result;
}
// return a function
Function.prototype.mybind = function(context, ...args) {
    const symbol = Symbol();
    context[symbol] = this; 
    
    return function(){
        const result = context[symbol](...args);
        delete context[symbol];
        return result;
    }
}

