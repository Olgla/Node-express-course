const{readFileSync, writeFileSync} = require('fs');
//{readFileSync} desctucturing this:
// const fs = require('fs');
// fs.readFileSync();
const path = "./temporary/fileA.txt";
for (let i = 0; i < 3; i++) {
    writeFileSync(path, "next line of text \n", {flag: 'a'});
}
//DO NOT add "utf8" parameter, will brake the path

const readFile = readFileSync(path, "utf8");
console.log(readFile);