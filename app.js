//server side programming
const express = require('express');
const bodyparser = require('body-parser');
const request = require('request')

const app = express();

//if there is any in static file then use a special mathod which is static (express method).******IMP*******
app.use(express.static("public"));

//to use body parser below line is mendatory every time when we have to fatch the data from html page.
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
//this is where we are allocating pages direction. 
//eg signup is seted as main page over here.
    res.sendFile(__dirname + "/signup.html");
})

app.post("/",(req,res)=>{
        var firstname = req.body.fname;
        var lastname = req.body.lname;
        var email = req.body.email;
        console.log(firstname,lastname,email)
});


app.listen(3000,()=>{
    console.log("server is running at 3000 port");
});


//API key
//3035e3ef11bca2a4f26ffbdf66242e11-us14

//list id or audians id