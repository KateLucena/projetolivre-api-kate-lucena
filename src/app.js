const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const index = require('./routes/index')
//mongodb://localhost:27017/reprograma
mongoose.connect("mongodb+srv://admin:admin123@reprograma-0ugbm.mongodb.net/reprograma", {useNewUrlParser: true,
useUnifiedTopology: true});

let db = mongoose.connection;

db.on("error", console.log.bind("connection error:"))

db.once("open", function (){
    console.log("conexão feita com sucesso.")
})

const locais = require("./routes/locaisRoute")
  
app.use(express.json());
  
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use('/', index)
app.use(express.static("public"));
  
app.use(bodyParser.json());
  
app.use("/locais", locais)
  
module.exports = app