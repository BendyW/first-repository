//our module requires express + express.Router()
var express = require('express');
var ctrl = express.Router();

ctrl.get('/', function(req,res,next){
   res.render('index',{
       message: 'It is Russell\'s Birthday'
   });
});

ctrl.get('/hello', function(req,res,next){
    res.render('hello', {
        name: 'Homer Simpson',
        adjective: 'funny',
        framework: 'Express.js'
    });
});

//export controller
module.exports = ctrl;
