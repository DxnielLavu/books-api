// DEPENDENCIES
const express = require("express");
const mongoose = require('mongoose')
var cors = require('cors')

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE
app.use(express.json())
app.use(cors())

// ROUTES
app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get('/books/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })

// Books
const booksController = require("./controllers/books_controller.js");
app.use("/books", booksController);

// LISTEN
app.listen(PORT, () => {
    console.log("listening on port", PORT);
    console.log('CORS-enabled web server listening on por', PORT)
  });

  mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )  