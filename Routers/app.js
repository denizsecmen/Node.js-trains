var path=require('path');
var express=require('express');
var controller=require("./controller/router");
var app=express();
app.use("/ROUTERS/public",express.static(__dirname+'/ROUTERS/public'));
app.use("/",controller);
app.listen(9000);