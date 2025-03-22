const os = require('os');
const type = os.type(); //OPTIONAL-assignment to variable
console.log(type); 

//console.log(os.type());//direct logging
console.log(os.userInfo());

//----------------------//
// SAME AS ABOVE (but only type function from 'os' module):

// const {type} = require('os'); //destructure 'os' object and get only 'type' FUNCTION!!!
// console.log(type()); //logging the result of type()