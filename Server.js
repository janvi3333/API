var express = require('express');
var app = express();
const PORT = 1234;
var bodyparser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var config = require("./DB");
var UserRoute = require("./Routes/User.route");

mongoose.Promise = global.Promise;
mongoose.connect(config.URL,{useNewUrlParser:true}).then(()=>{
    console.log("Database is connected " +config.URL);
}).catch(err=>{
    console.log(err);
})

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use('/user',UserRoute);
app.use('/contact',UserRoute); 

app.use((err, req, res, next) => {
    return res.status(err.status || 200).json({
      success: false,
      status: err.status || 200,
      message: err.message,
    });
  });

app.listen(PORT,()=>{
    console.log("Server is running on port  " +PORT);
})