const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuariosController')

router.post('/', controller.post)
router.post('/auth', controller.postAuth)
router.get('/', controller.get)
router.get('/:nome/buscar', controller.getNomeUsuario)
router.get('/:id', controller.getId)
router.delete('/:id', controller.deleteUsuarios)


module.exports = router  