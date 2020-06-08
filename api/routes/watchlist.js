var express = require("express");
var router = express.Router();

var app = express();

let movies = [];

router.get("/:movie", function(req, res, next) {

    if (req.session.vieuws) {
        req.session.vieuws ++;
        movies.push(req.params.movie)
        res.send(req.session)
    } else {
        req.session.vieuws = 1;
        movies.push(req.params.movie)
        res.send(req.session)
    }
});

module.exports = router;