var express = require('express');
const fs = require('fs');
const path=require('path');
var app=express();
console.log(__dirname.toString());
app.use("/public", express.static(__dirname + '/public'));
app.get("/",function(req,res)
{
    fs.readFile("index.html",function(err,data)
    {
     res.write(data);
     res.end("Message finished");
    })
})
app.listen(9000);