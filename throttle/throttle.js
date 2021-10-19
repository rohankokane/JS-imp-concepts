export function throttle(fn, limit, ...defaultArgs) {
  let flag = true;
  let timer, result;
  return (...innerArgs) => {
    let context = this,
      args = arguments;
    if (flag) {
      result = fn.apply(context, [...defaultArgs, ...args]);
      flag = false;
      let timer = setTimeout(() => {
        flag = true;
        // clearTimeout(timer);
      }, limit);
    }
  };
}
