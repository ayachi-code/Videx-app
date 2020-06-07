var express = require('express');
var router = express.Router();

/*Home pagina */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
