const curryModule = require("./curry");

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curryModule.curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying
