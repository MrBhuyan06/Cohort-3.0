const { log } = require("console");
const fs = require("fs");

// class Reactangle {
//   constructor(length, width, color) {
//     this.length = length;
//     this.width = width;
//     this.color = color;
//   }
//   area() {
//     const area = this.width * this.length;
//     return area;
//   }
//   paint() {
//     console.log(`Painting ${this.color}`);
//   }
// }

// const objReact = new Reactangle(10, 20, "red");
// objReact.paint();
// console.log(objReact.area());

// // Inheritance:
// //Date
// const now = new Date();
// console.log(now.toISOString());

//Promise
// It is a javascript object which eventually complete or failer of async operation and return retruning a value

// function setTimeOutPromises(ms) {
//   let p = new Promise((resolve) => setTimeout(resolve, ms));
//   return p;
// }
// function callBack() {
//   console.log(`I am a callBack`);
// }
// setTimeOutPromises(3000).then(callBack);
// function random() {}

// let p = new Promise(random);
// console.log(p);

// fs.readFile("a.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

//create a function a retun a promise
// function solveTheVal(readTheFile) {
//   fs.readFile("a.txt", "utf-8", (err, data) => {
//     readTheFile(data);
//   });
// }

// function callBack(contain) {
//   console.log(contain);
// }

// function readFile() {
//   return new Promise(solveTheVal);
// }
// const p = readFile();
// p.then(callBack);

// function promifiedReadFile() {
//   return new Promise((res) =>
//     fs.readFile("a.txt", "utf-8", (err, data) => res(data))
//   );
// }
// promifiedReadFile().then((data) => console.log(data));

// class MyPromise {
//   constructor(fn) {
//     // const afterDone = () => {
//     //   //   console.log("after done n Constructor");

//     //   //   this.resolve;
//     //   console.log("after done n Constructor", this);
//     // };
//     // function afterDone() {
//     //   console.log("after done n Constructor", this);
//     //   // this.resolve();
//     // }
//     fn(afterDone);
//   }
//   then(callBack) {
//     this.resolve = callBack();
//   }
// }

// function toPerformSetTime(resolve) {
//   setTimeout(function () {
//     resolve();
//   }, 6000);
// }
// function promisifiedCallBack() {
//   return new MyPromise(toPerformSetTime);
// }
// function callBack() {
//   console.log("i am callBack");
// }
// let p = promisifiedCallBack();
// p.then(callBack);
 let c=0;
 for(i=0; i<10000000;i++){
  c=c+1

  console.log(c)
 }