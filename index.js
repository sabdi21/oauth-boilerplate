require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('./config/ppConfig')

const app = express();

app.use(express.static('static')); // allows you to access 
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
// app.use(layouts)
app.set('view engine', 'ejs');

// CONFIGURE THE EXPRESS-SESSION MIDDLEWARE
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session())

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/auth', require('./controllers/auth'));
app.use('/api', require('./controllers/api'));

app.listen(process.env.PORT || 3000, () => {
    console.log("You're listening to the sweet sound of port " + process.env.PORT)
});