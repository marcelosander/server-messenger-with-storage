var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const options = {
    title: 'Server Messenger',
  };
  res.render('index', options);
});

router.get( "/chat", (req, res) => {
  const options = {
    title: 'Client Messenger',
  };
  res.render( "chat", options )
});

module.exports = router;
