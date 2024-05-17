// Server

// Enviroment variables
require("dotenv").config();

// MongoDB connection
const { connectDB } = require("./utils/db");
connectDB();

// Setup Express
const express = require("express");
const app = express();

// Cookie parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Express Validator
//const { check } = require('express-validator');

// Enable compression
const compression = require("compression");
app.use(compression());

// Interpret responses as JSON
// app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Use CORS
const cors = require("cors");
app.use(cors());

app.set("views", "./views");
app.set("view engine", "pug");

// Static routes
app.use("/public", express.static("public"));

// EvidenceItem routes
const evidenceRoutes = require("./routes/evidenceRoutes");
app.use("/", evidenceRoutes);

// Start the server
const server = app.listen(8080, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
