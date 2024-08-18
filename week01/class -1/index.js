//TypeScripts
function sum(a, b) {
  return +a + +b;
}
let res = sum("1", 2);
console.log(res);
const { log } = require("console");
//

// function sumNumber(n) {
//   return n *( n + 1) / 2;
// }
// let ans = sumNumber(3);
// console.log(ans);

// Try to create promiseved version

const fs = require("fs");
// const contains = fs.readFileSync("abhi.txt", "utf-8"); //sync
// console.log(contains);
// const containsgudu = fs.readFile("gudu.txt", "utf-8"); //async
// console.log(containsgudu);

// <---- Async ----->

console.log("First");
fs.readFile("abhi.txt", "utf-8", function (err, contents) {
  console.log(contents);
});
fs.readFile("gudu.txt", "utf-8", function (err, contents) {
  console.log(contents);
});
fs.readFile("c.txt", "utf-8", function (err, contents) {
  console.log(contents);
});
console.log("Seconds");
