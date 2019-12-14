const Usuarios = require('../model/usuarios')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')


function geraToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
    }); 
}
exports.get = (req, res) => {
    Usuarios.find(usuarios)
    .then(() => {
        return res.status(200).send({ usuarios });
    })
    .catch((err) => {
        return res.status(400).send({ message: err });
    })
}
exports.post = (req, res) => {
    const usuario = new Usuarios(req.body)
    usuario.save()
    .then(() => {
        return res.status(201).send(usuario)
    }).catch((err) => {
        return status(400).send({ message: err });
    });

}

function checkPassword(passwordEntry, senha) {
   
    return bcrypt.compare(passwordEntry, senha)
}

exports.postAuth = async (req, res) => {
    const { email, senha} = req.body;
    
    const user = await Usuarios.find({email});

    if (!user) {
        return res.status(401).send({ error: 'Cliente não encontrado!' });
    }

    const { id, name } = user;

    try {
        checkPassword(senha, user.senha);
    } catch (err) {
        return res.status(401).send({ error: 'Senha não confere!' });
    }

    try {
        return res.json({
            user: {
                id,
                name,
            },
            token: jwt.sign({ id }, authConfig.secret,
            {
                expiresIn: authConfig.expiresIn
            }),
        })
    } catch (err) {
        return res.status(401).send({ error: err })
    }
}  

exports.get = (req, res) => {
    Usuarios.find()
    .then((usuarios) => {
        res.status(200).send(usuarios)
    })
    .catch((err) => {
        res.status(400).send({ message: err });
    });
} 
exports.getId = (req, res) => {
    const usuariosId = req.params.id;
    Usuarios.findById(usuariosId, function (err, usuarios) {
        if (err) return res.status(500).send(err);
    
        if (!usuarios) {
          return res.status(200).send({ message: `Infelizmente não localizamos usuarios com este id: ${usuariosId}` });
        }
    
        res.status(200).send(usuarios);
      })
}
exports.getNomeUsuario = (req, res) => {
    const nome = req.params.nome;
    Usuarios.find({ nome }, function (err, usuarios) {
        if (err) res.status(500).send(err);
        res.status(200).send(usuarios);
    })
}
exports.deleteUsuarios = (req, res) => {
    const id = req.params.id;
    Usuarios.findById(id, function(err, usuarios){
        if (err) res.status(500).send(err);

        if(!usuarios) return res.status(200).send({message:'Infelizmente não localizamos o Id'})

        usuarios.remove(function (err){
            if(!err){
                res.status(200).send({message: 'Usuario removido com sucesso!'})
            }
        })
    })
} 