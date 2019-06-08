const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const db = require("./config/keys").URI;

mongoose.connect(
  db,
  {
    useNewUrlParser: true
  })
  .then(db => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`:):)Server up and running on port ${port} !`));
