let total = 0;
let place = 0;
let count = 0;
let zeros = 0;
let ones = 0;

var fs = require('fs');
var direc = fs.readFileSync("./myBinary.txt").toString('utf-8');
let arr = direc.split('\n');


function Rating(rate, a, count) {
  count = place = 0;
  for(let i = 0; i < rate.length; i++){
    // count zeros and ones
    if(rate[i].substr(place, 1) == '0') {
        zeros++;
      }
      else if(rate[i].substr(place, 1) == '1') {
        ones++;
      }
      // determine which binary to take
      if (i == rate.length-1) {
        if(zeros > ones) {
          if(a == 'air') {
             rate = rate.filter(oxygen => oxygen.substr(place,1) == '0');
          }
          else {
            rate = rate.filter(oxygen => oxygen.substr(place,1) == '1');
          }
            count = rate.length;
        }
        else if(zeros < ones ) {
          if (a == 'air') {
            rate = rate.filter(oxygen => oxygen.substr(place,1) == '1');
          }
          else {
            rate = rate.filter(oxygen => oxygen.substr(place,1) == '0');
          }
          count = rate.length;          
        }
        else if(zeros == ones){
          if(a == 'air') {
            rate = rate.filter(oxygen => oxygen.substr(place,1) == '1');
          }
          else {
            rate = rate.filter(oxygen => oxygen.substr(place,1) == '0');
          }
            count = rate.length;   
        }
        i = -1;
        ones = zeros = 0;
        place++;
      }
      if(count == 1) {
          return rate;
      }
}
}

let oxy = Rating(arr, 'air');
//console.log(oxy);
let carbOxy = Rating(arr, 'carbon');
//console.log(carbOxy);

total = parseInt(oxy.join(''), 2) * parseInt(carbOxy.join(''), 2);
console.log(total);