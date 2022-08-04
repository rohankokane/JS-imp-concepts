import { curry } from "./curry";
function sum(a, b, c) {
  return a + b + c;
}
export { curry, sum };

// let curriedSum = curry.curry(sum);
// console.log(curriedSum(1, 2, 3)); // 6, still callable normally
// console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
// console.log(curriedSum(1)(2)(3)); // 6, full currying
