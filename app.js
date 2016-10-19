var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

//Set public, views, and handlebars
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

//require controllers
var homeCtrl = require('./controllers/home');
var playgroundCtrl = require('./controllers/playground');
var userCtrl = require('./controllers/user');

//we map '/' route to controllers
app.use('/',homeCtrl);
app.use('/play',playgroundCtrl);
app.use('/user', userCtrl);



app.listen(process.env.PORT || port);
console.log('server has started');

