var express = require("express");
var path = require("path");
var fs = require("fs");
var logger = require("morgan");

var app = express();
var staticPath = path.join(__dirname,"static");

app.use(logger("short"));

app.use(function(req,res,next){
    console.log("Normal:1");
    next();
});
app.use(function(req,res,next){
    console.log("Normal:2");
    next();
});
app.use(function(req,res,next){
    console.log("Normal:3");
    next();
});
app.use(function(req,res,next){
    console.log("Normal:4");
    // next();
    next("err");
});
app.use(function(req,res,next){
    console.log("Normal:5");
    next();
});
app.use(function(req,res,next){
    console.log("Normal:6");
    next();
});
app.use(function(req,res,next){
    console.log("Normal:7");
    next();
});
app.use(express.static(staticPath));

app.use(function(err,req,res,next){
    console.log("ERROR:1");
    next("err1");
});
app.use(function(err,req,res,next){
    console.log("ERROR:2");
    next("err2");
});
app.use(function(err,req,res,next){
    console.log("ERROR:3");
    next();
});
app.use(function(err,req,res,next){
    console.log("ERROR:4");
    next();
});
app.use(function(err,req,res,next){
    console.log("ERROR:5");
    next();
});
app.use(function(err,req,res,next){
    console.log("ERROR:6");
    next();
});
app.use(function(err,req,res,next){
    console.log("ERROR:7");
    next();
});

app.use(function(req,res,next){
    console.log("Normal:8");
    next();
});

app.use(function(req,res,next){
    console.log("Normal:9");
    next();
});
//last
app.use(function(req,res){
    res.send("The End");
    console.log("The end");
});

app.listen(3000,function(){
    console.log('app started on port 3000');
});