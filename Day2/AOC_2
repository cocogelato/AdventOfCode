let horizontal = 0;
let depth = 0;
let total = 0;

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
      }
      else if(arr2[i][j] == 'down' ) {
          depth += parseInt(arr2[i][1]);
      }
      else if(arr2[i][j] == 'up') {
          depth -= parseInt(arr2[i][1]);
      }
    }
}

total = horizontal * depth;

console.log(total);
