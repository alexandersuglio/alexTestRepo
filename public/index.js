//tests is js file is properly connected to index.html
console.log("nice");

var bodyparser = require('body-parser');
var port = process.env.PORT || 8080;


var express = require('express');
var app = express();
var path = require('path');
//var axios = require('axios');

app.use(express.urlencoded());

//lets us include files from public folder
app.use(express.static('public'));

var router = require("../routes/routes.js");

app.use("/", router);


app.listen(port, function() { console.log("All systems go! App running on localhost " + port) });








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