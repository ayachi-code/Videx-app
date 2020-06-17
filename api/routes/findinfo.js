var express = require("express");
var router = express.Router();
var fetch = require("node-fetch")


router.get("/:info",function(req, res, next) {

  const url = "http://www.omdbapi.com/?t=" + req.params.info + "&apikey=adb375bd"
  fetch(url)
  .then(response => response.json())
  .then(data => {
    let movie_info = {
      name: [],
      language: [],
      Metascore: [],
      overview: [],
      release_date: []
  }  
  movie_info.name.push(data.Title);
  movie_info.language.push(data.Language);
  movie_info.Metascore.push(data.Metascore);
  movie_info.overview.push(data.Plot);
  movie_info.release_date.push(data.Released);
  

  res.send(movie_info)
  
  })
});

module.exports = router;