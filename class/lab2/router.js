const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the router file");
});

router.get("/name", (req, res) => {
  res.send("Victor");
});

router.get("/greeting", (req, res) => {
  res.send(`Hello there my name is Victor\n and my Student ID is N01604038`);
});

router.get("/add/:x/:y", (req, res) => {
    console.log(req.params);
    res.send("result");
  });

router.get("/add_query", (req, res) => {
console.log(req.query);
res.send(JSON.stringify(parseFloat(req.query.x) + parseFloat(req.query.y)));
});

router.get("/calculate/:x/:y/:op", (req,res) =>{
    let x = req.params.x;
    let y = req.params.y;
    let op = req.params.op;

    switch(op){
        case "+":
            res.send(JSON.stringify(parseFloat(x) + parseFloat(y)));
            break;
        case "-":
            res.send(JSON.stringify(parseFloat(x) - parseFloat(y)));
            break;
        case "*":
            res.send(JSON.stringify(parseFloat(x) * parseFloat(y)));
            break;
        case "/":
            res.send(JSON.stringify(parseFloat(x) / parseFloat(y)));
            break;
        case "**":
            res.send(JSON.stringify(parseFloat(x) ** parseFloat(y)));
            break;
        default:
            res.send("Invalid operator");
    }
})



module.exports = router;
