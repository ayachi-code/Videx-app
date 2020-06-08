var express = require("express");
var router = express.Router();

let movies = [];

router.get('/:movies', function (req,res,next) {
    
});


module.exports = router;


// if (req.session.vieuws) {
//     req.session.vieuws ++;
//     res.send(req.session)
// } else {
//     req.session.vieuws = 1;
//     res.send(req.session)
// }