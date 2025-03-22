const http = require('http');
const server= http.createServer((request, response) => {
    if(request.url === "/") {
        response.write("Welcome to my page!");
        response.end();
    }
    if(request.url === "/about") {
        response.end("This is page about the page :)");//can skip write method and 
        // add result to the end method
    }
    response.end(
        `<h1>There's no such page (or other error)</h1>
        <a href = "/">Home</a>`);//default result
})
server.listen(3000);