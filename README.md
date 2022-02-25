<h1 align="center">
  <img alt="Logo" src="./backend.jpg" width="200px">
</h1>

<h3 align="center">
  Aplicação com express para o projeto JoinBackend
</h3>

<p align="center">Operações básicas CRUD </p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/static/v1?label=TypeScript&message=99.3%&color=blue">

   <img alt="GitHub" src="https://img.shields.io/static/v1?label=Licence&message=MIT&color=blue"/>

  <a href="https://www.linkedin.com/in/walleks-r-miranda-b291bb1aa/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/static/v1?label=Made%20by&message=Walleks%20M&color=blueviolet">
  </a>

</p>

<p align="center">
  <a href="#sobre-o-projeto">Sobre o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-introducao">Introdução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licenca">Licença</a>
</p>

## Sobre o projeto

Esta API fornece informações dos clientes e dos endereços que pertence ao cliente.

Cliente pode ter vários endereços cadastrados.

Possui cobertura de testes **Integração** | **Unitário**

Tendo o **Docker** como uma ferramenta para auxilia na criação das images e banco de dados, possibilidando ter a mesmas configuração em outra máquina para executar esse projeto, tanto local ou em produção.

## 🚀 Tecnologias

Tecnologias que usei para desenvolver esta API.

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [Yup](https://github.com/jquense/yup)
- [Tsyringe](https://github.com/microsoft/tsyringe)
- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose/)
- [MySQL](https://www.mysql.com)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Introdução

Para executar este projeto em sua máquina, segue abaixo alguns requisitos.

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- Uma instância de [MySQL](https://www.mysql.com)

> Obs.: Eu recomendo usar o Docker Compose

**Clona este projeto e acessa a pasta**

```bash
$ git clone https://github.com/WalleksMR/joinBackend.git && cd joinBackend
```

**Segue o passo a passo a baixo**

```bash
# Instalar as dependências
$ yarn

# Faz uma copia de '.env-example' para '.env'
# as configuração já estão aplicadas.

$ cp .env-example .env

# Ira cria a instância do MySQL usando o Docker Compose
# junto com o banco de dados de teste
# e a imagem da aplicação rodando na porta 3232.
$ docker-compose up -d

# Quando os serviços estiverem em execução, execute as migrações
$ yarn typeorm migration:run

# Muito bem, aplicação está em executação
```

**Para realizar os testes basta executar:**

```bash
# Executar todos os testes
$ yarn test
```

---

<h1 align="center"> REST API - Rotas</h1>

## Get list of Clients

`GET /clients/`

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json

    [
      {
        id: string;
        name: string;
        cnpj: string;
        corporate_name: string;
        contact: string;
        address: [
          {
            id: string;
            client_id?: string;
            street: string;
            number: string;
            complement: string;
            neighborhood: string;
            city: string;
            state: string;
            zip_code: string;
            latitude: string;
            longitude: string;
            }
          }
        ]
      }
    ]

## Create a new Client

### Request

`POST /clients/`

    Body{
        name: 'New Client',
        cnpj: '80212855000115',
        corporate_name: 'Razao social',
        contact: '5594991008899',
      }

### Response

    HTTP/1.1 201 Created
    Status: 201 Created
    Connection: close
    Content-Type: application/json

    [
      {
        id: 658c157e-25d3-489c-bc7b-9710fbee2119
        name: 'New Client',
        cnpj: '80212855000115',
        corporate_name: 'Razao social',
        contact: '5594991008899',
      }
    ]

## Update a Client

### Request

`PATCH /clients/:id`

    Params: 658c157e-25d3-489c-bc7b-9710fbee2119

    Body{
        name: 'New Client 2',
        cnpj: '80212855000115',
        corporate_name: 'Razao social update',
        contact: '5594991008899',
      }

### Response

    HTTP/1.1 201 Updated
    Status: 201 Updated
    Connection: close
    Content-Type: application/json

    [
      {
        id: 658c157e-25d3-489c-bc7b-9710fbee2119
        name: 'New Client 2',
        cnpj: '80212855000115',
        corporate_name: 'Razao social update',
        contact: '5594991008899',
      }
    ]

#

## Get list of Address

`GET /address/`

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json

    [
      {
        id: string;
        client_id?: string;
        street: string;
        number: string;
        complement: string;
        neighborhood: string;
        city: string;
        state: string;
        zip_code: string;
        latitude: string;
        longitude: string;
      }
    ]

`POST /address/:client_id`

### Request

    Params: 658c157e-25d3-489c-bc7b-9710fbee2119

    Body{
        street: 'Rua Rex',
        number: '1234',
        complement: 'Casa',
        neighborhood: 'Bairro Local',
        city: 'Ourilândia',
        state: 'PA',
        zip_code: '68390000',
        latitude: '22222',
        longitude: '333333'
      }

### Response

    HTTP/1.1 201 Created
    Status: 201 Created
    Connection: close
    Content-Type: application/json

    [
      {
        id: 658c157e-25d3-489c-bc7b-9710fbee2119
        client_id: 158c227e-55d3-489c-bc7b-9710fbee29bc
        street: 'Rua Rex',
        number: '1234',
        complement: 'Casa',
        neighborhood: 'Bairro Local',
        city: 'Ourilândia',
        state: 'PA',
        zip_code: '68390000',
        latitude: '22222',
        longitude: '333333'
      }
    ]

`PATCH /address/update/:id`

    Params: 658c157e-25d3-489c-bc7b-9710fbee2119

    Body{
        street: 'Rua Sao Francisco',
        number: '2222',
        complement: 'Apartamento',
        neighborhood: 'Bairro Mineiro',
        city: 'Parauapebas',
        state: 'PA',
        zip_code: '68390000',
        latitude: '222222',
        longitude: '333333'
      }

### Response

    HTTP/1.1 201 Updated
    Status: 201 Updated
    Connection: close
    Content-Type: application/json

    [
      {
        id: 658c157e-25d3-489c-bc7b-9710fbee2119
        client_id: 158c227e-55d3-489c-bc7b-9710fbee29bc
        street: 'Rua Sao Francisco',
        number: '2222',
        complement: 'Apartamento',
        neighborhood: 'Bairro Mineiro',
        city: 'Parauapebas',
        state: 'PA',
        zip_code: '68390000',
        latitude: '222222',
        longitude: '333333'
      }
    ]

## 📝 Licença

Este projeto está licenciado sob a licença MIT - Veja [Licença](LICENSE.md) para mais detalhes.

---

Made with ❤️ &nbsp;by Walleks Miranda 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/walleks-r-miranda-b291bb1aa/)
