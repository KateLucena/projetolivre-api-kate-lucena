const Locais = require('../model/locais');
const fetch = require('node-fetch');



exports.get = (req, res) => {
    const filter = req.query
    Locais.find(filter, function (err, locais) {
        if (err) res.status(500).send(err);
        res.status(200).send(locais);
    })
}
exports.getId = (req, res) => {
    const locaisId = req.params.id;
    Locais.findById(locaisId, function (err, locais) {
        if (err) return res.status(500).send(err);
    
        if (!locais) {
          return res.status(200).send({ message: `Infelizmente não localizamos locais com este id: ${locaisId}` });
        }
    
        res.status(200).send(locais);
      })
}
exports.getCategoria = (req, res) => {
    const categoria = req.params.categoria;
    Locais.find({ categoria }, function (err, locais) {
        if (err) res.status(500).send(err);
        res.status(200).send(locais);
    })
}

exports.getAcessibilidade = (req, res) => {
    const acessibilidade = req.params.acessibilidade;
    Locais.find(function (err, locais){
        if (err) res.status(500).send(err);

        const locaisAcess = locais.filter(locais => locais.acessibilidade == acessibilidade)
        
        res.status(200).send(locaisAcess)  
    })
    
}
    
exports.post = async function (req, res) {
    let locais = new Locais(req.body);

    locais.endereco = await buscarCeps(locais.cep).then(endereco => endereco.logradouro)
    locais.bairro = await buscarCeps(locais.cep).then(bairro => bairro.bairro)
    locais.cidade = await buscarCeps(locais.cep).then(cidade => cidade.localidade)
    locais.estado = await buscarCeps(locais.cep).then(estado => estado.uf)

    locais.save(function (err) {
        if (err) res.status(500).send(err);
        else {
            res.status(201).send({
                status: true,
                mensagem: "Local incluído com sucesso"
            });
        }
    });
}
const buscarCeps = (cep) => {

    return fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(json => json)

}
exports.updateLocais = (req, res) => {
    Locais.update(
        { _id: req.params.id },
        { $set: req.body },
        { upsert: true },
        function (err) {
            if (err) return res.status(500).send(err);
            res.status(200).send({ mensagem: "Atualizado com sucesso!" });
        })

}
exports.deleteLocais = (req, res) => {
    const id = req.params.id;
    Locais.findById(id, function(err, locais){
        if (err) res.status(500).send(err);

        if(!locais) return res.status(200).send({message:'Infelizmente não localizamos o Id'})

        locais.remove(function (err){
            if(!err){
                res.status(200).send({message: 'Local removido com sucesso!'})
            }
        })
    })
}