var express = require("express");
var router = express.Router();
var fetch = require("node-fetch")


/*
router.get("/:movie", function(req, res, next) {
    console.log(res)
    
    res.json({username: req.params})
});

*/

router.get("/:movie", function(req, res, next) {
  fetch("https://api.themoviedb.org/3/search/movie?api_key=ac5a895c793b78f0116f0b63423fc115&language=en-US&query=" + req.params.movie + "&page=1&include_adult=false")
  .then(response => response.json())
  .then((data) => {
    let movieinfo = {
      "name": []
    }
    let status = {
      exist: false
    }

    if (data.results === undefined || data.results.length == 0) {
      res.send(status)

    } else {
      for (let i = 0; i < 5; i++) {
        movieinfo.name.push(data.results[i].original_title)
      }
      res.send(movieinfo)
    }

    /*
    for (let i = 0; i < 5; i++) {
      //movieinfo.name.push(data.results[i].original_title)
      if (data.results[i].original_title === undefined) {
        console.log("bestaat niet .....")
      } else {
        console.log("asdasd")
      }
    }
    */
      //Sent data to client...
      //console.log(data)
      //res.send(movieinfo)
  })
});

module.exports = router;