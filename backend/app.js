const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require("path");

const userRoutes = require("./routes/users");

const books = require("./routes/books");

const app = express();

mongoose.connect("mongodb+srv://stefan:2f6ZujtBhKTSvtqS@cluster0.hmsch.mongodb.net/projectPIA?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Conected to database");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

app.use(bodyParser.json());

app.use("/images/bookImages", express.static(path.join("backend/images/bookImages")));
app.use("/images/profileImages", express.static(path.join("backend/images/profileImages")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-AlLow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

app.use("/api/user", userRoutes);

app.use("/api/books", books);

module.exports = app;