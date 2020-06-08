var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    if (req.session.views) {
        //Na de eerst keer website bezocht
        console.log(req.session.views)
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + req.session.views + '</p>')
        // res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        //Eerste keer bezocht
        req.session.views = 1
        res.end()
    }
    });

module.exports = router;