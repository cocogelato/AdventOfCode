let horizontal = 0;
let depth = aim = 0;
let total = depthTotal = 0;

var fs = require('fs');
var direc = fs.readFileSync("./myDirections.txt").toString('utf-8');
let arr = direc.split('\n');

// turn it into a '2D' array
let arr2 = arr.map(arr => arr.split(" "));

for(let i = 0; i < arr2.length; i++) {
    let inside = arr2[i];

    for(let j = 0; j < inside.length; j++) {
      if(arr2[i][j] == 'forward') {
          horizontal += parseInt(arr2[i][1]);
          depth = aim * parseInt(arr2[i][1]);
          depthTotal += depth;
      }
      else if(arr2[i][j] == 'down' ) {
          aim += parseInt(arr2[i][1]);
      }
      else if(arr2[i][j] == 'up') {
          aim -= parseInt(arr2[i][1]);
      }
    }
}

total = horizontal * depthTotal;
console.log(total);