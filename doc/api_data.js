define({ "api": [
  {
    "type": "delete",
    "url": "/locais/:id",
    "title": "8. Excluir um local",
    "group": "Locais",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id do Local.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "locais",
            "description": "<p>Mensagem de sucesso ao excluir um local</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n{ mensagem: \"Local removido com sucesso!\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/locaisRoute.js",
    "groupTitle": "Locais",
    "name": "DeleteLocaisId"
  },
  {
    "type": "post",
    "url": "/locais",
    "title": "1. Incluir um Local",
    "group": "Locais",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>Nome do Local.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "telefone",
            "description": "<p>Telefone do local.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do local.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Categoria do local.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "acessibilidade",
            "description": "<p>Acessibilidade do local.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "infoadicionais",
            "description": "<p>Informação adicional do local.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "numero",
            "description": "<p>Numero do local.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "cep",
            "description": "<p>Cep do local.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "locais",
            "description": "<p>Mensagem de sucesso ao incluir um local</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 201 Created\n{\n    status: true,\n    mensagem: \"Local incluído com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/locaisRoute.js",
    "groupTitle": "Locais",
    "name": "PostLocais"
  },
  {
    "type": "put",
    "url": "/locais/:id",
    "title": "7. Alterar um local",
    "group": "Locais",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id do local.</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>Nome do Local.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "telefone",
            "description": "<p>Telefone do local.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do local.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Categoria do local.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "acessibilidade",
            "description": "<p>Acessibilidade do local.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "infoadicionais",
            "description": "<p>Informação adicional do local.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "numero",
            "description": "<p>Numero do local.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "cep",
            "description": "<p>Cep do local.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "locais",
            "description": "<p>Mensagem de sucesso ao alterar um local</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n{ mensagem: \"Atualizado com sucesso!\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/locaisRoute.js",
    "groupTitle": "Locais",
    "name": "PutLocaisId"
  },
  {
    "type": "get",
    "url": "/locais/:acessibilidade/buscar",
    "title": "5. Buscar Local por Acessibilidade",
    "name": "getAcessibilidade",
    "group": "Locais",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acessibilidade",
            "description": "<p>Acessibilidade do local.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "locais",
            "description": "<p>Retorna os locais por acessibilidade.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n   {\n    \"acessibilidade\": [\n          \"Estacionamento\",\n          \"Entrada\",\n          \"Elevador\",\n          \"Banheiro\"\n      ],\n      \"_id\": \"5df5504799fd5212b0dbc511\",\n      \"titulo\": \"Mercado Livre - melicidade\",\n      \"telefone\": null,\n      \"email\": null,\n      \"categoria\": \"Compras\",\n      \"infoadicionais\": null,\n      \"numero\": 3003,\n      \"cep\": \"06233903\",\n      \"endereco\": \"Avenida das Nações Unidas 3003\",\n      \"bairro\": \"Bonfim\",\n      \"cidade\": \"Osasco\",\n      \"estado\": \"SP\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/locaisRoute.js",
    "groupTitle": "Locais"
  },
  {
    "type": "get",
    "url": "/locais/:categoria/filtrar",
    "title": "4. Buscar Local por Categoria",
    "name": "getCategoria",
    "group": "Locais",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Categoria do local.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "locais",
            "description": "<p>Retorna os locais por categoria.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n [\n   {\n    \"acessibilidade\": [\n          \"Estacionamento\",\n          \"Entrada\",\n          \"Elevador\",\n          \"Banheiro\"\n      ],\n      \"_id\": \"5df5504799fd5212b0dbc511\",\n      \"titulo\": \"Mercado Livre - melicidade\",\n      \"telefone\": null,\n      \"email\": null,\n      \"categoria\": \"Compras\",\n      \"infoadicionais\": null,\n      \"numero\": 3003,\n      \"cep\": \"06233903\",\n      \"endereco\": \"Avenida das Nações Unidas 3003\",\n      \"bairro\": \"Bonfim\",\n      \"cidade\": \"Osasco\",\n      \"estado\": \"SP\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/locaisRoute.js",
    "groupTitle": "Locais"
  },
  {
    "type": "get",
    "url": "/locais/:id",
    "title": "6. Buscar Local por Id",
    "name": "getId",
    "group": "Locais",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id do local.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "locais",
            "description": "<p>Retorna o local por Id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n [\n   {\n    \"acessibilidade\": [\n          \"Estacionamento\",\n          \"Entrada\",\n          \"Elevador\",\n          \"Banheiro\"\n      ],\n      \"_id\": \"5df5504799fd5212b0dbc511\",\n      \"titulo\": \"Mercado Livre - melicidade\",\n      \"telefone\": null,\n      \"email\": null,\n      \"categoria\": \"Compras\",\n      \"infoadicionais\": null,\n      \"numero\": 3003,\n      \"cep\": \"06233903\",\n      \"endereco\": \"Avenida das Nações Unidas 3003\",\n      \"bairro\": \"Bonfim\",\n      \"cidade\": \"Osasco\",\n      \"estado\": \"SP\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/locaisRoute.js",
    "groupTitle": "Locais"
  },
  {
    "type": "get",
    "url": "/locais",
    "title": "2. Buscar Locais cadastrados",
    "name": "getLocais",
    "group": "Locais",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "locais",
            "description": "<p>Retorna a lista de locais com acessibilidade.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n  {\n    \"acessibilidade\": [\n          \"Estacionamento\",\n          \"Entrada\",\n          \"Elevador\",\n          \"Banheiro\"\n      ],\n      \"_id\": \"5df5504799fd5212b0dbc511\",\n      \"titulo\": \"Mercado Livre - melicidade\",\n      \"telefone\": null,\n      \"email\": null,\n      \"categoria\": \"Compras\",\n      \"infoadicionais\": null,\n      \"numero\": 3003,\n      \"cep\": \"06233903\",\n      \"endereco\": \"Avenida das Nações Unidas 3003\",\n      \"bairro\": \"Bonfim\",\n      \"cidade\": \"Osasco\",\n      \"estado\": \"SP\"\n   },\n   {\n     \"acessibilidade\": [\n       \"Rampa\",\n       \"Banheiro Adaptado\"\n     ],\n    \"_id\": \"5defedb89c0c5141387c1b7a\",\n      \"titulo\": \"Coco-buk\",\n      \"numero\": 440,\n      \"cep\": \"06280120\",\n      \"telefone\": 11111111,\n      \"email\": \"teste50\",\n      \"categoria\": \"restaurante\",\n      \"infoadicionais\": \"teste\",\n      \"endereco\": \"Rua Arara\",\n      \"bairro\": \"Ayrosa\",\n      \"cidade\": \"Osasco\",\n      \"estado\": \"SP\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/locaisRoute.js",
    "groupTitle": "Locais"
  },
  {
    "type": "get",
    "url": "/locais/:titulo/nome",
    "title": "3. Buscar Local por Nome",
    "name": "getTitulo",
    "group": "Locais",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do local.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "locais",
            "description": "<p>Retorna um local com acessibilidade.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n [\n   {\n    \"acessibilidade\": [\n          \"Estacionamento\",\n          \"Entrada\",\n          \"Elevador\",\n          \"Banheiro\"\n      ],\n      \"_id\": \"5df5504799fd5212b0dbc511\",\n      \"titulo\": \"Mercado Livre - melicidade\",\n      \"telefone\": null,\n      \"email\": null,\n      \"categoria\": \"Compras\",\n      \"infoadicionais\": null,\n      \"numero\": 3003,\n      \"cep\": \"06233903\",\n      \"endereco\": \"Avenida das Nações Unidas 3003\",\n      \"bairro\": \"Bonfim\",\n      \"cidade\": \"Osasco\",\n      \"estado\": \"SP\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/locaisRoute.js",
    "groupTitle": "Locais"
  },
  {
    "type": "delete",
    "url": "/usuarios/:id",
    "title": "6. Excluir um Usuário",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id do Usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "locais",
            "description": "<p>Mensagem de sucesso ao excluir um usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n{ mensagem: \"Usuário removido com sucesso!\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuariosRoute.js",
    "groupTitle": "Usuarios",
    "name": "DeleteUsuariosId"
  },
  {
    "type": "post",
    "url": "/usuarios",
    "title": "1. Incluir um Usuário",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do Usuário.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do Usuário.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>Senha do Usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "usuarios",
            "description": "<p>Mensagem de sucesso ao incluir um usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "  HTTP/1.1 201 Created\n{\n     \n \"_id\": \"5df6844bde46ec1300960778\",\n \"nome\": \"Keila33\",\n \"email\": \"keila3@gmail.com\",\n \"senha\": \"$2a$10$ZPQKr/oayQK0bQKLvFHBju7tlPmSB4M3xeKAH1KqLO90ibDG8Yddq\",\n \"criadoEm\": \"2019-12-15T19:06:51.619Z\"\n\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuariosRoute.js",
    "groupTitle": "Usuarios",
    "name": "PostUsuarios"
  },
  {
    "type": "post",
    "url": "/usuarios/auth",
    "title": "2. Gerar Token do Usuário",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do Usuário.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>Senha do Usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "usuarios",
            "description": "<p>Mensagem de sucesso ao gerar um Token para o usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "   HTTP/1.1 201 Created\n      \n{\n  \"user\": {},\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzYzNTc4NjQsImV4cCI6MTU3NjYxNzA2NH0.LxxgNoqaW_SdOKmiC1wHqUrm1_bXwEVG9k1R-743j2E\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuariosRoute.js",
    "groupTitle": "Usuarios",
    "name": "PostUsuariosAuth"
  },
  {
    "type": "get",
    "url": "/usuarios/:id",
    "title": "5. Buscar Usuários por Id",
    "name": "getId",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "usuarios",
            "description": "<p>Retorna um usuário por Id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n  {\n      \"_id\": \"5df19f89e461784d5467c855\",\n      \"nome\": \"Ney\",\n      \"email\": \"ney@gmail.com\",\n      \"senha\": \"$2a$10$TN4A7awLEyAfOR0..06Tpu106NNf7I6ZPqmnItfoIClx9mQzDQ7Tm\",\n      \"criadoEm\": \"2019-12-15T19:15:20.398Z\"\n  } \n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuariosRoute.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "get",
    "url": "/usuarios/:nome/buscar",
    "title": "4. Buscar Usuários por Nome",
    "name": "getNomeUsuario",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "usuarios",
            "description": "<p>Retorna um usuário por Nome.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n  {\n      \"_id\": \"5df19f89e461784d5467c855\",\n      \"nome\": \"Ney\",\n      \"email\": \"ney@gmail.com\",\n      \"senha\": \"$2a$10$TN4A7awLEyAfOR0..06Tpu106NNf7I6ZPqmnItfoIClx9mQzDQ7Tm\",\n      \"criadoEm\": \"2019-12-15T19:15:20.398Z\"\n  } \n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuariosRoute.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "get",
    "url": "/usuarios",
    "title": "3. Buscar Usuários cadastrados",
    "name": "getUsuarios",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "usuarios",
            "description": "<p>Retorna a lista com todos os usuários cadastrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n  {\n      \"_id\": \"5df15d6ee45e9b466c6f5c8a\",\n      \"nome\": \"Kate\",\n      \"email\": \"kate@gmail.com\",\n      \"senha\": \"$2a$10$bK5B1eBCs/UNyNa9rrf1beyttcLoNPKQgKDZ4qIzRdxVKoi3CV8Uu\",\n      \"criadoEm\": \"2019-12-15T19:15:20.393Z\"\n  },\n  {\n      \"_id\": \"5df19f89e461784d5467c855\",\n      \"nome\": \"Ney\",\n      \"email\": \"ney@gmail.com\",\n      \"senha\": \"$2a$10$TN4A7awLEyAfOR0..06Tpu106NNf7I6ZPqmnItfoIClx9mQzDQ7Tm\",\n      \"criadoEm\": \"2019-12-15T19:15:20.398Z\"\n  } \n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuariosRoute.js",
    "groupTitle": "Usuarios"
  }
] });
