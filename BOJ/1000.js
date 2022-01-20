// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// BOJ 에 제출할 땐 파일 명 변경 해주기 './input.txt' -> '/dev/stdin'
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = input[0].split(" ");

let a = parseInt(line[0]);
let b = parseInt(line[1]);

console.log(a + b);
