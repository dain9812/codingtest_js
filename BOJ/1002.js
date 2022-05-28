let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let t = Number(input[0]);

let getPoint = (distance, r1, r2) => {
  let rSum = (r1 + r2) ** 2;
  let rSub = (r1 - r2) ** 2;

  if (distance === 0) {
    if (r1 === r2) return -1;
    return 0;
  } else {
    if (distance > rSum || distance < rSub) {
      return 0;
    } else if (distance === rSum || distance === rSub) {
      // 내접 or 외접
      return 1;
    } else {
      return 2;
    }
  }
};

for (let i = 1; i < input.length; i++) {
  let [x1, y1, r1, x2, y2, r2] = input[i].split(" ").map(Number);
  let distance = (x1 - x2) ** 2 + (y1 - y2) ** 2;
  let answer = getPoint(distance, r1, r2);
  console.log(answer);
}
