let curr = 0;
let prev = 0;
let count = 0;

var fs = require("fs");
var text = fs.readFileSync("./myTestArray.txt").toString('utf-8');
var arr = text.split("\n");

for(curr; curr < arr.length; curr++) {
    if(arr[curr] > prev) {
        count++;
    }
    prev = arr[curr];
}

console.log(count);
