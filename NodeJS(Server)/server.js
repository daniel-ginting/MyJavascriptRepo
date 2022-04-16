const express = require("express");
const fs = require("fs");

const app = express();

fs.readFile("./text.txt", (err, data) => {
  if (err) {
    console.log("ahh error");
  } else {
    console.log(data.toString());
  }
});

const file = fs.readFileSync("./test.txt", "utf8");

console.log(file, "this is the second");



// APPENDING FILES WITH NODEJS
// fs.appendFileSync('./test.txt', ' jesse pinkman is my partner', err => {
//   if(err){
//     console.log('oh shoot, error in system!')
//   }
// })



// WRITE FILES USING NODEJS
// fs.writeFileSync("second.txt", "test, this is the second file", (err) =>
//   console.log(err)
// );



// DELETE FILES WITH NODEJS
// fs.unlink("./second.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('goodbye')
//   }
// });
