const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig')

//Display the Github login form
router.get('/github',
  passport.authenticate('github'));

router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication we can then redirect home.
    console.log("This is the user:", passport)
    res.redirect('/');
  });

module.exports = router;