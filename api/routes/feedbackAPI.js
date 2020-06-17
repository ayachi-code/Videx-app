var express = require("express");
var router = express.Router();
var admin = require('firebase-admin')

var service = require('./videx.json')

admin.initializeApp({
    credential: admin.credential.cert(service),
    databaseURL: "https://videx-b7759.firebaseio.com"

});


router.post("/", (req,res) => {
    let data = {
        feed: Object.keys(req.body)
    }
    let feedbackBase = admin.database().ref('Tips/')
    feedbackBase.push(data)
})

module.exports = router;