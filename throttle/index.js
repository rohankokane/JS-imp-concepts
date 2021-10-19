// Throttling ensures that the function executes at a regular interval.
import { throttle } from "./throttle.js";

const expFn = (...data) => {
  console.log(data, this);
  console.log("expFn called");
};
const throttledExpFn = throttle(expFn, 1000, "default args");
// const newObj = { throttle, text: "rock" };

window.addEventListener("resize", () => {
  // console.log("heyy");
  throttledExpFn("henloo");
});
