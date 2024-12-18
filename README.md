# 🖖 API Stormtrooper

## 🌍 Languages

- 🇺🇸 [English](#english)
- 🇧🇷 [Português](#português)

---

## 🇺🇸 English

Welcome to my project! This is my first project using Node.js with Express.js.

This project focus on display a few APIs for stormtrooper management.

### How to start
- **Database**

    The first thing you need to do is to set up the mongoDb instance. You can do it installing it locally or using a Docker
container.

    To create a Docker container quickly, you can run: `docker run --name meu-mongo -d -p 27017:27017 mongo`

    And to change the database configuration, you can check the [project's config file](./config/default.json)
and [mongoose config file](./server/config/mongoose.js).


- **Install dependencies**
 
    Before you start the project, you need to install all it's dependencies. You can do it by running:

    `npm install`


- **Run**

    You can start the project by running:

    `npm run dev` (it will make the project run in multiples threads)

### How to consume

Once the project is running, you can consume its APIs by accessing the 
[swagger documentation](http://localhost:3000/api-docs/).

To be able to consume all APIs, use the following credentials to generate the JWT token:
- **Username:** rebels
- **Password:** 1138


## 🇧🇷 Português 


Bem-vindo(a) ao meu projeto! Esse é o meu primeiro projeto usando Node.js com Express.js.

Este projeto foca em disponibilizar algumas APIs para administração de stormtroopers.

### Como iniciar
- **Banco de dados**

    A primeira coisa que você precisa fazer é preparar uma instância mongoDb. Você pode fazer isso instalando ele
localmente ou usando um container Docker.

    Para criar um container Docker rapidamente, você pode rodar o seguinte comando: `docker run --name meu-mongo -d -p 27017:27017 mongo`

    Além disso, para mudar qualquer configuração do banco de dados, você pode acessar o [arquivo de configuração do projeto](./config/default.json)
  e o [arquivo de configuração do mongoose](./server/config/mongoose.js).


- **Instalar dependências**
    
    Antes de iniciar o projeto, você precisa  instalar todas as dependências do projeto. Você pode fazer isso rodando:

  `npm install`


- **Run**

  Você pode iniciar o projeto rodando o seguinte comando:

  `npm run dev` (ele fará com que o projeto rode e múltiplas threads)

### Como consumir

Assim que o projeto estiver iniciado, você consegue consumir a suas APIs acessando a 
[documentação swagger](http://localhost:3000/api-docs/).

Para conseguir consumir todas as APIs, use as seguintes credenciais para gerar o token JWT:
- **Username:** rebels
- **Password:** 1138