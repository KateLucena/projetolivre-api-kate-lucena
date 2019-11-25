const mongoose = require('mongoose');

const LocaisSchema = new mongoose.Schema({
    
    endereco: {type: String},
    bairro: {type: String},
    cidade: {type: String},
    estado: {type: String},
    cep: {type: Number},
    telefone: {type: Number},
    email: {type: String},
    categoria: {type: String},
    tipoacessibilidade: {type: String},
    infoadicionais: {type: String}

}, {
    versionKey: false
})

const Locais = mongoose.model('Locais', LocaisSchema);

module.exports = Locais;