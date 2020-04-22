
console.log("nice");


var bodyparser = require('body-parser');
var port = process.env.PORT || 8080;


var express = require('express');
var app = express();
var path = require('path');
//var axios = require('axios');

app.use(express.urlencoded());

app.use(express.static('public'));


// view landing page at http://localhost:8080
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
});




app.listen(port, function() { console.log("All systems go! App running on localhost " + port) });












// //post to API
// app.post('/submitted', function(req, res) {

//     var name = req.body.name;
//     var email = req.body.email;

//      console.log("name entered: " + name);
//      console.log("email entered " + email);

//     res.sendFile(path.join(__dirname + '/success.html'));
// });


// ///////////////
// var firebase = require('firebase');
// //var db = firebase.firestore();
  

//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyBRsBy6ppWjpWwIMHiaxZEDyaAzPUswRco",
//     authDomain: "alex-data-base-test.firebaseapp.com",
//     databaseURL: "https://alex-data-base-test.firebaseio.com",
//     projectId: "alex-data-base-test",
//     storageBucket: "alex-data-base-test.appspot.com",
//     messagingSenderId: "589882337734",
//     appId: "1:589882337734:web:a60ce6e1f0dce6fa2deac7",
//     measurementId: "G-440K1TY9BB"
//   };

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);


// var ref = firebase.database();
// ///////////////