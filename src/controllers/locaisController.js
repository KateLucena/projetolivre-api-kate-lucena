const Locais = require('../model/locais');


exports.get = (req, res) => {
    const filter = req.query
    Locais.find(filter, function (err, locais) {
        if (err) res.status(500).send(err);
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
exports.post = function (req, res) {
    let locais = new Locais(req.body);

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
exports.updateLocais = (req, res) => {
    Locais.update(
        { _id: req.params._id },
        { $set: req.body },
        { upsert: true },
        function (err) {
            if (err) return res.status(500).send(err);
            res.status(200).send({ mensagem: "Atualizado com sucesso!" });
        })

}
exports.deleteLocais = (req, res) => {
    const id = req.params.id
    Locais.findOne({id}, function(err, locais){
        if (err) res.status(500).send(err);

        if(!locais) return res.status(200).send({message:'Infelizmente não localizamos o Id'})

        locais.remove(function (err){
            if(!err){
                res.status(200).send({message: 'Local removido com sucesso!'})
            }
        })
    })
}