/** @format */
import fetch from "node-fetch";
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("done"), 2000);
// });

// promise.then((result) => {
//   console.log(result);
// });

const data = fetch("https://jsonplaceholder.typicode.com/users").then(
  (result) => {
    console.log(result.body());
  }
);
console.log(data);
