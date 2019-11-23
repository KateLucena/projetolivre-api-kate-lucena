const mongoose = require('mongoose');

const LocaisSchema = new mongoose.Schema({
    
    nome: { type: String },
    email: {type: String, required: true},
    cpf: {type: Number},
    dataNascimento: { type: Date },
    estadoCivil: { type: String},
    telefone: {type: Number},
    comprou: {type: Boolean}

}, {
    versionKey: false
})

const Locais = mongoose.model('Locais', LocaisSchema);

module.exports = Locais;