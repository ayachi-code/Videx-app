var express = require("express");
var router = express.Router();

// router.post('/', (req,res) => {
//     console.log(req.body)
//     //req.session.userdata = req.body[0];
//     //console.log(req.session.userdata)
// })



router.get("/:movies", (req,res) => {
    req.session.userdata = req.params;
    console.log(req.session.userdata)
    res.send({movies: req.session.userdata})
})



module.exports = router;


// if (req.session.vieuws) {
//     req.session.vieuws ++;
//     res.send(req.session)
// } else {
//     req.session.vieuws = 1;
//     res.send(req.session)
// }