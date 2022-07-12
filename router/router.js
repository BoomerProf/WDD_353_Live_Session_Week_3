const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("I'm home");
  res.render('home', { pagename: 'Home' });
});

router.get('/about', (req, res) => {
  console.log("I'm about");
  res.render('about', { pagename: 'About' });
});

router.get('/services', (req, res) => {
  console.log("I'm services");
  res.render('services', { pagename: 'Services', errors: error });
});

router.post('/reg', (req, res) => {
  // req req.body.firstName
});
module.exports = router;
