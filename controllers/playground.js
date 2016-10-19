var express = require('express');
var ctrl = express.Router();

// data for our routers
var data = [
    {
        name: 'North Coast Music Festival',
        location: 'Union Park',
        notes: ' Wu tang Clan'
    },
    {
        name: 'Spring Awakening',
        location: 'Soldier Field',
        notes: "minors"
    },
    {
        name: "Marshmallow",
        location: "Concord",
        notes: 'ayy'
    }
];

//Building our first real API
ctrl.get('/',function(req,res,next){
   res.json(data);
});

ctrl.get('/1', function(req,res,next){
   res.json(data[0]);
});
ctrl.get('/2', function(req,res,next){
    res.json(data[1]);
});
ctrl.get('/3', function(req,res,next){
    res.json(data[2]);
});

module.exports = ctrl;