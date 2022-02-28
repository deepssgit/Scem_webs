const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const http = require('http');
const port = 3000;


    const app = express();

    app.use(bodyParser.urlencoded({extended:true}))
    
    app.use(express.static("public"));
    
    app.set("view engine","ejs");
    
    app.get("/",function (req,res) {
        res.render("home")
    })

    // app.get("/scemteam",function (req,res) {

    //     res.render("home")
    // })

    // app.get("/",function (req,res) {
    //     res.render("home")
    // })

    // app.get("/",function (req,res) {
    //     res.render("home")
    // })




app.listen(port,'',function(){
    console.log("server is running on port 3000")
})