const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

const index = require('./routes/index')

mongoose.connect("mongodb+srv://admin:admin123@reprograma-0ugbm.mongodb.net/reprograma", {useNewUrlParser: true,
useUnifiedTopology: true, useCreateIndex: true});

let db = mongoose.connection;

db.on("error", console.log.bind("connection error:"))

db.once("open", function (){
    console.log("conexão feita com sucesso.")
})

const locais = require("./routes/locaisRoute")
const usuarios = require('./routes/usuariosRoute')
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
app.use(express.static('doc'))
app.get('/api-doc', (req,res)=>{
  res.sendFile( path.join(__dirname + '/../doc/index.html'));
});
app.use('/usuarios', usuarios)
app.use(bodyParser.json());
  
app.use("/locais", locais)
  
module.exports = app