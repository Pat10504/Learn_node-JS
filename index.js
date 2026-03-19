const {format} = require('date-fns');
const {v4: uuid} = require('uuid'); 

console.log(format(new Date(), 'yyy:mm:dd <-----> HH:mm:ss'));
console.log(uuid());

console.log('pat');