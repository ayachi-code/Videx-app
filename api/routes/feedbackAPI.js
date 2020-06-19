var express = require("express");
var router = express.Router();
var admin = require('firebase-admin')

var service = require('./videx.json')


//Firebase initilaiseren
admin.initializeApp({
    credential: admin.credential.cert(service),
    databaseURL: "https://videx-b7759.firebaseio.com"

});


router.post("/", (req,res) => {
    let data = {
        feed: Object.keys(req.body)
    }
    //Ref maken voor database
    let feedbackBase = admin.database().ref('Tips/')
    //Feedback word verzonden naar firebase
    feedbackBase.push(data)
})

module.exports = router;