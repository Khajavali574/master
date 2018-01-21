var express = require('express');

var app = express();

app.listen(8080,function(){
    console.log("Server is started")
})
app.get("/",function(req,res){
    res.send("Welcome to node");
    res.end();
});