var express = require("express");
var router = express.Router();
var fetch = require("node-fetch")

router.get("/:movie", function(req, res, next) {

  //Fetch film informatie
  fetch("https://api.themoviedb.org/3/search/movie?api_key=ac5a895c793b78f0116f0b63423fc115&language=en-US&query=" + req.params.movie + "&page=1&include_adult=false")
  .then(response => response.json())
  .then((data) => {
    //De films komen in dit object terecht
    let movieinfo = {
      "name": []
    }
    //Status als film niet bestata
    let status = {
      exist: false
    }

    //Als film niet bestaat stuur dan de exist: false
    if (data.results === undefined || data.results.length == 0) {
      res.send(status)

    } else {
      //Anders stuur de lijst met films(5)
      for (let i = 0; i < 5; i++) {
        movieinfo.name.push(data.results[i].original_title)
      }
      res.send(movieinfo)
    }
  })
});

module.exports = router;