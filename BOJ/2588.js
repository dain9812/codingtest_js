let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = input[0]; // "482"
let b = input[1]; // "375"

// parseInt("485") * parseInt("5")
console.log(parseInt(a) * parseInt(b[2]));
// parseInt("485") * parseInt("5")
console.log(parseInt(a) * parseInt(b[1]));
// parseInt("485") * parseInt("5")
console.log(parseInt(a) * parseInt(b[0]));

// parseInt("485") * parseInt("375")
console.log(parseInt(a) * parseInt(b));
