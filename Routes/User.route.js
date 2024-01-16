var express = require("express");
var UserRoute = express.Router();
var bodyparser = require("body-parser");
var userController = require("../Controller/Users");

UserRoute.post('/user', userController.userCreate)
UserRoute.post('/saveContactDetail', userController.saveContactDetail)
module.exports = UserRoute;
