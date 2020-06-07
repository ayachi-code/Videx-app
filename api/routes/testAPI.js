var express = require("express");
var router = express.Router();

//let mensen = ["Bilal","Henk"]

router.get("/", function(req, res, next) {
    res.send("hey");
});

module.exports = router;