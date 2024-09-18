require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; 
const path = require("path");




app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "homepage.html"))
    });

app.get("/download", (req, res) => {
    res.download(path.join(__dirname, "tobedownload", "testdownload.txt"));
    });


    /* example 1 - params
        -> domain/endpoint/params -> :
        localhost:8000/itm/:itemID
    */

app.get("/itm/:itemID", (req, res) => {
    console.log(req.params);
    res.send("item");
})


    /* example 2 - query
        -> domain/endpoint?query=value
        localhost:8000/watch?v=123456
    */

app.get("/watch", (req, res) => {
    console.log(req.query);
    res.send("welcome to query");
})

    /* example 3 - body
        -> domain/endpoint
        localhost:8000/login

        middleware - anything that we do after receiving the request and
                     before sending the response
    */

app.use(express.urlencoded({extended: true}));

// app.get("/login", (req, res) => {
//     res.sendFile(path.join(__dirname, "pages", "login.html"))
//     });

// app.post("/login", (req, res) => {
//     console.log(req.body);
//     res.send("login successful");
// });

app.route("/login")
    .get((req, res) => {res.sendFile(path.join(__dirname, "pages", "login.html"))})
    .post((req, res) => {
        console.log(req.body);
        res.send("login successful");
    });



console.log(PORT);
// api.example.com/username:exampleName/password:123456/searchingForMusic:rock
// to avoid people seeing the password in the url, we can create a .env file and store the password there
// npm i dotenv --> command for creating a .env file

app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`); 
});