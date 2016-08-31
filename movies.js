"use strict";
var express = require('express');
var router = express.Router();
router.get('/users/:id', function (req, res, next) {
    if (req.params.id == 0)
        next('route');
    else
        next();
}, function (req, res) {
    res.send('regular user');
});
router.get('/users/:id', function (req, res) {
    res.send('admin');
});
module.exports = router;
