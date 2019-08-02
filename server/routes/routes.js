var express = require('express');
var router = express.Router();
var User = require('../../models/User');
var mongoose = require('mongoose');



function find (name, query, cb) {
    mongoose.connection.db.collection(name, function (err, collection) {
        collection.find(query).toArray(cb);
    });
}

router.get('/', function(req, res){
    res.render('index')
});


//endpoint template

router.route('/testPost').post((req,res) => {
    console.log(req.body);
    res.send({success: "nice"});
    //model.save((err) => {
    //  res.send('success');
    // })
});

router.route('/user').post((req, res) => {
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.username = req.body.username;
    user.password = req.body.password;

    console.log("USER", req.body);
    console.log("REQ", user);



    user.save((err) => {
        if (err) res.send(err);
        res.send({success: "user added!"});
    })
});


router.route('/user').get( (req, res) => {
    var user = new User();

    var username = req.body.username;
    var password = req.body.password;

    find('users', {username: username, password: password}, function (err, docs) {
        console.log("DOCS?", docs);
        res.send(docs);
    });



});

module.exports = router;
