var http = require("http");
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const dogURL = "https://dog.ceo/api/breeds/image/random";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ALLOW CORS
const allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

axios.get(dogURL).then(function(response) {
  const dogResult = response.message;
  console.log(response.data.message);
});

//routes
app.get("/", (req, res) => {
  axios.get(dogURL).then(function(response) {
    res.json(response.data.message);
  });
});

app.get("/random", (req, res) => {
  axios.get(dogURL).then(function(response) {
    res.json(response.data.message);
  });
});

app.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

module.exports = app;

//create a server object:
// http
//   .createServer(function(req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080
