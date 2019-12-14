const express = require("express")
const router = express.Router()
const controller = require("../controllers/locaisController")
const authMiddleware = require('../middleware/auth')


/**
 * @api {get} Locais
 * @apiName GetLocais
 * @apiGroup Locais
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

router.get("/", controller.get)
router.get("/:titulo/nome", controller.getTitulo)
router.get("/:categoria/filtrar", controller.getCategoria)
router.get("/:acessibilidade/buscar", controller.getAcessibilidade)
router.get("/:id", controller.getId)

router.use(authMiddleware)
router.post("/", controller.post)
router.put("/:id", controller.updateLocais)
router.delete("/:id", controller.deleteLocais)

module.exports = router