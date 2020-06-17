var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");


router.post("/", (req,res) => {
    //console.log(JSON.parse(req.body))
    console.log(Object.keys(req.body))
    //console.log(req.body)

})

module.exports = router;