var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.listen(port, () => {
 console.log("Server running on port 3000");
});

app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});