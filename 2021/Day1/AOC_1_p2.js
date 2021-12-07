let curr = 0;
let prev;
let count = 0;
let arr2 = [];
let i = 1;
let j = 0;
let sum = 0;

const { Console } = require("console");
var fs = require("fs");
var text = fs.readFileSync("./myArray.txt").toString('utf-8');
var arr = text.split("\n");


for(curr; curr < arr.length; curr++) {
    if (i <= 3) {
       // console.log('This is: ' + i + ' number: ' + arr[curr]);
        sum += parseInt(arr[curr]);
        i++
    }
    else if (i > 3) {
    //    console.log('This is: ' + i + ' number: ' + arr[curr]);
        arr2.push(sum);
        i = 1;
        sum = 0;
        curr = j;
        j++;
    }
}
// add in the last line
arr2.push(sum);

for(curr = 0; curr < arr2.length; curr++) {
    if(arr2[curr] > prev) {
        count++;
    }
    prev = arr2[curr];
}
console.log(count);