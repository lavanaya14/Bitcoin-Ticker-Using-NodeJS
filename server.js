  //jshint esversion:6

 const express = require("express");

 const app = express();
 

 app.get("/", function(request, res){
    res.send("<h1>Hello, World!<h1>");
});
app.get("/contact", function(req,res){
    res.send("contact me at: lavanaya@gmail.com");
});

app.get("/about", function(req,res){
    res.send("My Name is lavanaya and I'm MERN Developer");
});

app.get("/hobbies", function(req,res){
    res.send("<ul><li>coffee</li><li>code</li><li>beer</li></ul>");
});

 app.listen(3000, function(){
    console.log("server started on port 3000")
 });