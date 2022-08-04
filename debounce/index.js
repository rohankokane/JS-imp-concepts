import { debounce } from "./debounce.js";

const inputField = document.getElementById("inputField");

const getData = (...data) => {
  console.log(data, this);
  console.log("getData called");
};
const debouncedGetData = debounce(getData, 500, "default args");
// const newObj = { debounce, text: "rock" };

inputField.addEventListener("keyup", () => {
  debouncedGetData("henloo");
});

export { debounce };
