const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.user) {
    res.render('index', { title: 'Express' });
  } else {
    res.redirect('chat');
  }
});

/* GET user page. */
router.get('/getUser', function(req, res, next) {
  res.json(req.user);
});

module.exports = router;
