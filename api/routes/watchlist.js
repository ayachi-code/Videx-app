var express = require("express");
var router = express.Router();



router.get("/:movies", (req,res) => {
    //Sla op in server session
    req.session.userdata = req.params;
    //Stuur cach na client
    res.send({movies: req.session.userdata})
})

module.exports = router;