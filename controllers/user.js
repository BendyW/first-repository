var express = require('express');
var ctrl = express.Router();

var users = [
    {
        username: 'testy buds',
        password: 'leetpasswordz'
    },
    {
        username: 'bilbo baggins',
        password: 'my precious'
    },
    {
        username: "mario",
        password: 'mushrooms'
    }
];


ctrl.get('/', function(req,res,next){//next == callback
   res.json(users);
});


module.exports = ctrl;