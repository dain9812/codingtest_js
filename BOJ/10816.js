let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 데이터의 개수
let n = Number(input[0]);
let data = input[1].split(" ").map(Number);
let m = Number(input[2]);
let query = input[3].split(" ").map(Number);

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    // 최대한 왼쪽으로 이동하기
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    // 최대한 왼쪽으로 이동하기
    else start = mid + 1;
  }
  return end;
}

// 값이 [leftValue, rightValue]인 데이터의 개수를 반환
function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

data.sort((a, b) => a - b);

let answer = "";
for (let x of query) {
  let cnt = countByRange(data, x, x);
  answer += cnt + " ";
}
console.log(answer);
