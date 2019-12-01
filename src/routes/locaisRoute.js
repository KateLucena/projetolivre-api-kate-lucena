const express = require("express")
const router = express.Router()
const controller = require("../controllers/locaisController")

router.get("/", controller.get)
router.get("/:categoria", controller.getCategoria)
router.post("/", controller.post)
router.put("/:_id", controller.updateLocais)
router.delete("/:_id", controller.deleteLocais)
module.exports = router