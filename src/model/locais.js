const mongoose = require('mongoose');

const LocaisSchema = new mongoose.Schema({

    titulo: {type:String},
    endereco: {type: String},
    bairro: {type: String},
    cidade: {type: String},
    estado: {type: String},
    cep: {type: Number},
    telefone: {type: Number},
    email: {type: String},
    categoria: {type: String},
    acessibilidade: {type: String},
    //acessibilidade: [{titulo: String}],
    infoadicionais: {type: String}

}, {
    versionKey: false
})

const Locais = mongoose.model('Locais', LocaisSchema);

module.exports = Locais;