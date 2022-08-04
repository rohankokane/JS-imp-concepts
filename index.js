import { curry, sum } from "./currying";
import * as pubSub from "./pubSubPattern";
console.log("hello world!!");

console.log(pubSub);
pubSub.subscribe("onClick", () => {
  console.log("CLICKED");
});
pubSub.subscribe("onClick", () => {
  console.log("CLICKED2");
});
pubSub.publish("onClick");
