let express = require("express");
let app = express();
require("dotenv").config();
let bodyParser = require("body-parser");

// ==== Meet the Node console
// console.log("Hello World");

// ==== Start a Working Express Server
// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

// ==== Serve an HTML File
// app.get("/", (req, res) => {
//   let absolutePath = __dirname + "/views/index.html";
//   res.sendFile(absolutePath);
// });

//==== Serve Static Assets
// app.use("/public", express.static(__dirname + "/public"));

// ==== Serve JSON on a Specific Route
// app.get("/json", (req, res) => {
//   res.json({
//     message: "Hello json",
//   });
// });

// ==== Use the .env File
// app.get("/json", (req, res) => {
//   let messEnv = process.env.MESSAGE_STYLE;
//   let message =
//     messEnv === "uppercase" ? "Hello json".toUpperCase() : "Hello json";
//   res.json({
//     message: message,
//   });
// });

// ==== Implement a Root-Level Request Logger Middleware
// app.use((req, res, next) => {
//   let method = req.method;
//   let path = req.path;
//   let ip = req.ip;
//   console.log(`${method} ${path} - ${ip}`);
//   next();
// });

// ==== Chain Middleware to Create a Time Server
// app.get(
//   "/now",
//   (req, res, next) => {
//     req.time = new Date().toString();
//     next();
//   },
//   (req, res) => {
//     res.send({ time: req.time });
//   }
// );

// ==== Get Route Parameter Input from the Client
// app.get("/:word/echo", (req, res, next) => {
//   let wordParam = req.params.word;
//   res.json({
//     echo: wordParam,
//   });
// });

// ==== Get Query Parameter Input from the Client
// app.get("/name", (req, res, next) => {
//   let lstQuery = req.query;
//   res.json({
//     name: `${lstQuery.first} ${lstQuery.last}`,
//   });
// });

// ==== Use body-parser to Parse POST Requests
// app.use(bodyParser.urlencoded({ extended: false }));

// ==== Get Data from POST Requests
/*
  If you use next(), you getting this error "[ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client"
  Solution 1 or 2:
    1. Remove next()
    2. Add ‘return’ before `res.json()`
 */
// app.use(bodyParser.urlencoded({ extended: false }));
// app.post("/name", (req, res) => {
//   let fname = req.body.first;
//   let lname = req.body.last;
//   res.json({
//     name: `${fname} ${lname}`,
//   });
// });

module.exports = app;
