var express = require('express');
const fs = require('fs');
const path=require('path');
var app=express();
var gg=require("./mid.js");
console.log(__dirname.toString());
app.use("/css", express.static(__dirname + '/css'));
app.use(function(req,res,next){
    console.log("Url:"+req.url);
    next();
})
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
})
gg.add
app.listen(9000);