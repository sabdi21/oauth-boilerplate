const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios')

router.get('/repos', (req, res) => {
    console.log('whats the user stuff', req.user)
    console.log('================')
    let config = {
        headers: {
            'Authorization': `Bearer ${req.user.token}`,
            'User-Agent': 'sabdi-oauth-boilerplate'
        }
    }
    axios.get('http://api.github.com/user/repos', config)
    .then((response) => {
        res.render('repos', { repos: response.data})
    })
    .catch((err) => {
        console.log(err);
    })
})

module.exports = router;