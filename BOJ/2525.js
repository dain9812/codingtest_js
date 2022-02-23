let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let hour = Number(input[0].split(" ")[0]);
let time = Number(input[0].split(" ")[1]) + Number(input[1]);

if (time > 59) {
  hour = hour + Math.floor(time / 60);
  time = time % 60;
  if (hour > 23) {
    hour = hour - 24;
  }
}

console.log(hour, time);
