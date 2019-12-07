const mongoose = require('mongoose');

const LocaisSchema = new mongoose.Schema({

    titulo: {type:String},
    telefone: {type: Number},
    email: {type: String},
    categoria: {type: String},
    acessibilidade: [ ],
    infoadicionais: {type: String},
    endereco: {type: String},
    numero: {type: Number},
    bairro: {type: String},
    cidade: {type: String},
    estado: {type: String},
    cep: {type: String}

}, {
    versionKey: false
})  

const Locais = mongoose.model('Locais', LocaisSchema);

module.exports = Locais;