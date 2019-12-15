const express = require("express")
const router = express.Router()
const controller = require("../controllers/locaisController")
const authMiddleware = require('../middleware/auth')


/**
 * @api {get} /locais 2. Buscar Locais cadastrados 
 * @apiName getLocais
 * @apiGroup Locais
 *
 *
 * @apiSuccess {Object[]} locais Retorna a lista de locais com acessibilidade.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *   {
 *     "acessibilidade": [
 *           "Estacionamento",
 *           "Entrada",
 *           "Elevador",
 *           "Banheiro"
 *       ],
 *       "_id": "5df5504799fd5212b0dbc511",
 *       "titulo": "Mercado Livre - melicidade",
 *       "telefone": null,
 *       "email": null,
 *       "categoria": "Compras",
 *       "infoadicionais": null,
 *       "numero": 3003,
 *       "cep": "06233903",
 *       "endereco": "Avenida das Nações Unidas 3003",
 *       "bairro": "Bonfim",
 *       "cidade": "Osasco",
 *       "estado": "SP"
 *    },
 *    {
 *      "acessibilidade": [
 *        "Rampa",
 *        "Banheiro Adaptado"
 *      ],
 *     "_id": "5defedb89c0c5141387c1b7a",
 *       "titulo": "Coco-buk",
 *       "numero": 440,
 *       "cep": "06280120",
 *       "telefone": 11111111,
 *       "email": "teste50",
 *       "categoria": "restaurante",
 *       "infoadicionais": "teste",
 *       "endereco": "Rua Arara",
 *       "bairro": "Ayrosa",
 *       "cidade": "Osasco",
 *       "estado": "SP"
 *   }
 * ]
 */

router.get("/", controller.get)

/**
 * @api {get} /locais/:titulo/nome 3. Buscar Local por Nome
 * @apiName getTitulo 
 * @apiGroup Locais
 * 
 * @apiParam {String} nome Nome do local.
 *
 * @apiSuccess {Object} locais Retorna um local com acessibilidade.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 [
 *    {
 *     "acessibilidade": [
 *           "Estacionamento",
 *           "Entrada",
 *           "Elevador",
 *           "Banheiro"
 *       ],
 *       "_id": "5df5504799fd5212b0dbc511",
 *       "titulo": "Mercado Livre - melicidade",
 *       "telefone": null,
 *       "email": null,
 *       "categoria": "Compras",
 *       "infoadicionais": null,
 *       "numero": 3003,
 *       "cep": "06233903",
 *       "endereco": "Avenida das Nações Unidas 3003",
 *       "bairro": "Bonfim",
 *       "cidade": "Osasco",
 *       "estado": "SP"
 *   }
 * ]
 * 
 *
 */
router.get("/:titulo/nome", controller.getTitulo)

/**
 * @api {get} /locais/:categoria/filtrar 4. Buscar Local por Categoria
 * @apiName getCategoria 
 * @apiGroup Locais
 * 
 * @apiParam {String} categoria Categoria do local.
 *
 * @apiSuccess {Object} locais Retorna os locais por categoria.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 [
 *    {
 *     "acessibilidade": [
 *           "Estacionamento",
 *           "Entrada",
 *           "Elevador",
 *           "Banheiro"
 *       ],
 *       "_id": "5df5504799fd5212b0dbc511",
 *       "titulo": "Mercado Livre - melicidade",
 *       "telefone": null,
 *       "email": null,
 *       "categoria": "Compras",
 *       "infoadicionais": null,
 *       "numero": 3003,
 *       "cep": "06233903",
 *       "endereco": "Avenida das Nações Unidas 3003",
 *       "bairro": "Bonfim",
 *       "cidade": "Osasco",
 *       "estado": "SP"
 *   }
 * ]
 *
 */
router.get("/:categoria/filtrar", controller.getCategoria)

/**
 * @api {get} /locais/:acessibilidade/buscar 5. Buscar Local por Acessibilidade
 * @apiName getAcessibilidade 
 * @apiGroup Locais
 * 
 * @apiParam {String} acessibilidade Acessibilidade do local.
 *
 * @apiSuccess {Object[]} locais Retorna os locais por acessibilidade.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *    {
 *     "acessibilidade": [
 *           "Estacionamento",
 *           "Entrada",
 *           "Elevador",
 *           "Banheiro"
 *       ],
 *       "_id": "5df5504799fd5212b0dbc511",
 *       "titulo": "Mercado Livre - melicidade",
 *       "telefone": null,
 *       "email": null,
 *       "categoria": "Compras",
 *       "infoadicionais": null,
 *       "numero": 3003,
 *       "cep": "06233903",
 *       "endereco": "Avenida das Nações Unidas 3003",
 *       "bairro": "Bonfim",
 *       "cidade": "Osasco",
 *       "estado": "SP"
 *   }
 * ]
 */
router.get("/:acessibilidade/buscar", controller.getAcessibilidade)

/**
 * @api {get} /locais/:id 6. Buscar Local por Id
 * @apiName getId
 * @apiGroup Locais
 * 
 * @apiParam {String} id Id do local.
 *
 * @apiSuccess {Object} locais Retorna o local por Id.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 [
 *    {
 *     "acessibilidade": [
 *           "Estacionamento",
 *           "Entrada",
 *           "Elevador",
 *           "Banheiro"
 *       ],
 *       "_id": "5df5504799fd5212b0dbc511",
 *       "titulo": "Mercado Livre - melicidade",
 *       "telefone": null,
 *       "email": null,
 *       "categoria": "Compras",
 *       "infoadicionais": null,
 *       "numero": 3003,
 *       "cep": "06233903",
 *       "endereco": "Avenida das Nações Unidas 3003",
 *       "bairro": "Bonfim",
 *       "cidade": "Osasco",
 *       "estado": "SP"
 *   }
 * ]
 *
 */
router.get("/:id", controller.getId)

router.use(authMiddleware)
/**
 * @api {post} /locais 1. Incluir um Local
 * @apiGroup Locais
 * 
 * @apiParam (Request Body) {String} titulo Nome do Local.
 * @apiParam (Request Body) {Number} telefone Telefone do local.
 * @apiParam (Request Body) {String} email Email do local.
 * @apiParam (Request Body) {String} categoria Categoria do local.
 * @apiParam (Request Body) {String} acessibilidade Acessibilidade do local.
 * @apiParam (Request Body) {String} infoadicionais Informação adicional do local.
 * @apiParam (Request Body) {Number} numero Numero do local.
 * @apiParam (Request Body) {String} cep Cep do local.
 * 
 * @apiSuccess {Object} locais Mensagem de sucesso ao incluir um local
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *   {
 *       status: true,
 *       mensagem: "Local incluído com sucesso"
 *   }
 *
 */
router.post("/", controller.post)

/**
 * @api {put} /locais/:id 7. Alterar um local
 * @apiGroup Locais
 * @apiParam {String} id Id do local.
 * 
 * @apiParam (Request Body) {String} titulo Nome do Local.
 * @apiParam (Request Body) {Number} telefone Telefone do local.
 * @apiParam (Request Body) {String} email Email do local.
 * @apiParam (Request Body) {String} categoria Categoria do local.
 * @apiParam (Request Body) {String} acessibilidade Acessibilidade do local.
 * @apiParam (Request Body) {String} infoadicionais Informação adicional do local.
 * @apiParam (Request Body) {Number} numero Numero do local.
 * @apiParam (Request Body) {String} cep Cep do local.
 *
 * @apiSuccess {Object} locais Mensagem de sucesso ao alterar um local
 * 
 * @apiSuccessExample Sucesso
 *    HTTP/1.1 200 OK
 *   { mensagem: "Atualizado com sucesso!" }
 * 
 */
router.put("/:id", controller.updateLocais)

/**
 * @api {delete} /locais/:id 8. Excluir um local
 * @apiGroup Locais
 * @apiParam {String} id Id do Local.
 *
 * @apiSuccess {Object[]} locais Mensagem de sucesso ao excluir um local
 * 
 * @apiSuccessExample Sucesso
 *    HTTP/1.1 200 OK
 *   { mensagem: "Local removido com sucesso!"}   
 * 
 */

router.delete("/:id", controller.deleteLocais)

module.exports = router