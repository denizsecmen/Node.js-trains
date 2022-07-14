var express=require('express');
var path=require('path');
var router=express.Router();
router.get("/",function(req,res)
{
    res.sendFile(path.join(__dirname,'..','view','index.html'));
})
router.get("/secret",function(req,res)
{
    res.sendFile(path.join(__dirname,"..","view","secret.html"));
})
module.exports=router;