const { writeFile, readFile } = require('fs');

const path = "./temporary/fileB.txt";

for (let i = 0; i < 3; i++) {
writeFile(path, "Async added text to fileB \n", {flag: "a"}, (error, result) => {
    if(error) {
        console.log(error);
        return;
    }
})};
    
//Has been added to the q in between writeFile, can have less lines of text
//Needs await to get final result
readFile(path, "utf8", (error, fileContent) => {
    if(error) {
        console.log(error);
        return
    }
    console.log(fileContent);
});