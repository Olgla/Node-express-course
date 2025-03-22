// const { log } = require('console'); //need to check again why this is needed, 
// console-global?
//use log() directly??

const path = require('path');

const systemPathSeparator = path.sep;
const myFilePath = path.join(systemPathSeparator,"node-express-course", "temporary", "fileA.txt");

// console.log(systemPathSeparator);
console.log("myFilePath is ", myFilePath); //how to prevent this from executing in 10-fs file?

const file = path.basename(myFilePath); 
console.log(file); //fileA.txt
console.log(path.resolve(__dirname, myFilePath));// setting absolute path to the same file