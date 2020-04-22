var express = require('express');
var app = express();
var path = require('path');


// view landing page at http://localhost:8080
app.get('/', function(req, res)
{
   res.sendFile(path.join(__dirname + '/../views/index.html'));
});

//post to API
app.post('/submitted', function(req, res)
{
    var name = req.body.name;
    var email = req.body.email;
    var enquiry = req.body.subject;

     console.log("name entered: " + name);
     console.log("email entered " + email);
      console.log("message entered " + enquiry);


     var userInfo = 
     {
     	name: name,
     	email: email,
     	enquiry: enquiry
     }

    res.sendFile(path.join(__dirname + '/../views/success.html'));


    //res.json({ user: userInfo });
});


module.exports = app;