const Locais = require('../model/locais');


exports.get = (req, res) => {
    const filter = req.query
    Locais.find(filter, function (err, locais) {
        if (err) res.status(500).send(err);
        res.status(200).send(locais);
    })
}