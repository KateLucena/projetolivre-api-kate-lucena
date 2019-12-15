const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuariosController')

/**
 * @api {post} /usuarios 1. Incluir um Usuário
 * @apiGroup Usuarios
 * 
 * @apiParam (Request Body) {String} nome Nome do Usuário.
 * @apiParam (Request Body) {String} email Email do Usuário.
 * @apiParam (Request Body) {String} senha Senha do Usuário.
 * 
 * @apiSuccess {Object} usuarios Mensagem de sucesso ao incluir um usuário
 * 
 * @apiSuccessExample Sucesso
 *    HTTP/1.1 201 Created
 *  {
 *       
 *   "_id": "5df6844bde46ec1300960778",
 *   "nome": "Keila33",
 *   "email": "keila3@gmail.com",
 *   "senha": "$2a$10$ZPQKr/oayQK0bQKLvFHBju7tlPmSB4M3xeKAH1KqLO90ibDG8Yddq",
 *   "criadoEm": "2019-12-15T19:06:51.619Z"
 * 
 *   }
 *
 */
router.post('/', controller.post)

/**
 * @api {post} /usuarios/auth 2. Gerar Token do Usuário
 * @apiGroup Usuarios
 * 
 * @apiParam (Request Body) {String} email Email do Usuário.
 * @apiParam (Request Body) {String} senha Senha do Usuário.
 * 
 * @apiSuccess {Object} usuarios Mensagem de sucesso ao gerar um Token para o usuário
 * 
 * @apiSuccessExample Sucesso
 *    HTTP/1.1 201 Created
 *       
 * {
 *   "user": {},
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzYzNTc4NjQsImV4cCI6MTU3NjYxNzA2NH0.LxxgNoqaW_SdOKmiC1wHqUrm1_bXwEVG9k1R-743j2E"
 *
 * }
 *
 */
router.post('/auth', controller.postAuth)

/**
 * @api {get} /usuarios 3. Buscar Usuários cadastrados 
 * @apiName getUsuarios
 * @apiGroup Usuarios
 *
 *
 * @apiSuccess {Object[]} usuarios Retorna a lista com todos os usuários cadastrados.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *   {
 *       "_id": "5df15d6ee45e9b466c6f5c8a",
 *       "nome": "Kate",
 *       "email": "kate@gmail.com",
 *       "senha": "$2a$10$bK5B1eBCs/UNyNa9rrf1beyttcLoNPKQgKDZ4qIzRdxVKoi3CV8Uu",
 *       "criadoEm": "2019-12-15T19:15:20.393Z"
 *   },
 *   {
 *       "_id": "5df19f89e461784d5467c855",
 *       "nome": "Ney",
 *       "email": "ney@gmail.com",
 *       "senha": "$2a$10$TN4A7awLEyAfOR0..06Tpu106NNf7I6ZPqmnItfoIClx9mQzDQ7Tm",
 *       "criadoEm": "2019-12-15T19:15:20.398Z"
 *   } 
 * ]
 */
router.get('/', controller.get)

/**
 * @api {get} /usuarios/:nome/buscar 4. Buscar Usuários por Nome 
 * @apiName getNomeUsuario
 * @apiGroup Usuarios
 *
 *
 * @apiSuccess {Object[]} usuarios Retorna um usuário por Nome.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *   {
 *       "_id": "5df19f89e461784d5467c855",
 *       "nome": "Ney",
 *       "email": "ney@gmail.com",
 *       "senha": "$2a$10$TN4A7awLEyAfOR0..06Tpu106NNf7I6ZPqmnItfoIClx9mQzDQ7Tm",
 *       "criadoEm": "2019-12-15T19:15:20.398Z"
 *   } 
 * ]
 */
router.get('/:nome/buscar', controller.getNomeUsuario)

/**
 * @api {get} /usuarios/:id 5. Buscar Usuários por Id 
 * @apiName getId
 * @apiGroup Usuarios
 *
 *
 * @apiSuccess {Object[]} usuarios Retorna um usuário por Id.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *   {
 *       "_id": "5df19f89e461784d5467c855",
 *       "nome": "Ney",
 *       "email": "ney@gmail.com",
 *       "senha": "$2a$10$TN4A7awLEyAfOR0..06Tpu106NNf7I6ZPqmnItfoIClx9mQzDQ7Tm",
 *       "criadoEm": "2019-12-15T19:15:20.398Z"
 *   } 
 * ]
 */
router.get('/:id', controller.getId)

/**
 * @api {delete} /usuarios/:id 6. Excluir um Usuário
 * @apiGroup Usuarios
 * @apiParam {String} id Id do Usuário.
 *
 * @apiSuccess {Object[]} locais Mensagem de sucesso ao excluir um usuário
 * 
 * @apiSuccessExample Sucesso
 *    HTTP/1.1 200 OK
 *   { mensagem: "Usuário removido com sucesso!"}   
 * 
 */
router.delete('/:id', controller.deleteUsuarios)


module.exports = router  