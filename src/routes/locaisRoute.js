const express = require("express")
const router = express.Router()
const controller = require("../controllers/locaisController")

router.get("/", controller.get)
router.get("/:categoria/filtrar", controller.getCategoria)
router.get("/:acessibilidade/buscar", controller.getAcessibilidade)
router.get("/:id", controller.getId)
router.post("/", controller.post)
router.put("/:id", controller.updateLocais)
router.delete("/:id", controller.deleteLocais)

module.exports = router