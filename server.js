const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./config/connection")
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.use(routes)

mongoose.connect('mongodb://localhost/workoutDB', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});


db.once('open', () => {
  app.listen(PORT, () => {
      console.log(`App running on port ${PORT}!`);
    });
});
