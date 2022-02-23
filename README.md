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

$ cp .env.example .env

# Cria a instância do MySQL usando o Docker Compose
# Ire criar o bando de dados de produção e de teste
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

## 📝 Licença

Este projeto está licenciado sob a licença MIT - Veja [Licença](LICENSE.md) para mais detalhes.

---

Made with ❤️ &nbsp;by Walleks Miranda 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/walleks-r-miranda-b291bb1aa/)
