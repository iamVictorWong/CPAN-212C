const http = require("http")
const PORT = 8000 || process.env.PORT;
const fs = require("fs")
const path = require("path")
 
 
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        fs.readFile(path.join(__dirname, "pages", "homepage.html"), "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.write(data)
            res.end()
          });
    }
    else if(req.url === "/about"){
        fs.readFile(path.join(__dirname, "pages", "about.html"), "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.write(data)
            res.end()
          });
    }
    else if(req.url === "/contacts"){
        fs.readFile(path.join(__dirname, "pages", "contact.html"), "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.write(data)
            res.end()
          });
    }
    else if(req.url === "/books"){
        fs.readFile(path.join(__dirname, "pages", "contact.html"), "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.write(data)
            res.end()
          });
    }
    else if(req.url === "/sales"){
        fs.readFile(path.join(__dirname, "pages", "sales.html"), "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.write(data)
            res.end()
          });
    }
    else if(req.url === "/stationary-gift"){
        fs.readFile(path.join(__dirname, "pages", "stationary-gift.html"), "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.write(data)
            res.end()
          });
    }
    else if(req.url === "/signup"){
        fs.readFile(path.join(__dirname, "pages", "signup.html"), "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.write(data)
            res.end()
          });
    }
    else if (req.url === "/login"){
        if (req.method === "GET") {
            fs.readFile(path.join(__dirname, "pages", "login.html"), "utf8", (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
        } else if (req.method === "POST") {
                res.end("GOT THE DATA");
        }
    }
    
    else {
        fs.readFile(path.join(__dirname, "pages", "pagenotfound.html"), "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.write(data)
            res.end()
          });
    }
  });
 
 
  server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
  })