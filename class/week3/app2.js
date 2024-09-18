//npm intsall express nodemon dotenv
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; 
const path = require("path");

//middleware
app.use(express.urlencoded({extended: true}));




//catch all routes and send to 404 page
//keep this at the end
app.get("", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "pages", "404.html"))
    });