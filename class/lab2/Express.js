
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const lab2_router = require("./router");
 
// middleware
app.use(express.urlencoded({ extended: true }));
 

// add router file
app.use("/lab2", lab2_router);

 
app.get("/", (req, res)=>{
    res.send("Hello")
})
 
 
// catch all route, DO NOT PUT ANY ROUTE BELOW THIS
app.use("", (req, res) => {
  res.status(404).send("Page not Found");
});
 
 
app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`);
});
