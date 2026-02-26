const _ =require('lodash');
const math = require('./math');

console.log(math.add(2, 3));
console.log(math.multiply(4, 5));

console.log(_.chunk([1,2,3,4,5], 2));