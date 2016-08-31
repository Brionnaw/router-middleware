"use strict";
var express = require('express');
var app = express();
var movies = require('./movies');
app.use('/movies', movies);
app.get('/users/:id', function (req, res, next) {
    if (req.params.id == 0)
        next('route');
    else
        next();
}, function (req, res) {
    res.send('regular user');
});
app.get('/users/:id', function (req, res) {
    res.send('admin');
});
var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log("Server is running on PORT:" + port);
});
