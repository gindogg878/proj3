require("dotenv").config();
const express = require("express");
const path = require("path");

const logger = require("morgan");
require("./config/database");

const app = express(); //create our express server//
app.use(logger("dev")); //
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(express.static(path.join(__dirname, "build")));

// Put API routes here, before the "catch all" route

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
