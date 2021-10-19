export function debouncer(fn, delay = 0, ...defaultArgs) {
  let timer;
  return (...innerArgs) => {
    let context = this,
      args = arguments;

    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, [...defaultArgs, ...args]);
    }, delay);
  };
}
