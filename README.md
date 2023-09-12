# Fullstack Afiliados

Este projeto é um challenge que possibilita o upload de um arquivo de transações de produtos vendidos, realiza o processamento e retorna um resultado consolidado.

## Tecnologias utilizadas
### Backend: 

 - NodeJs 
 - Express 
 - Postgres 
 - Swagger

### Frontend

 - ReactJs 
 - react router 
 - axios 
 - sass 
 - Bootstrap

## Instalação e utilização
Como instalar e usar o projeto (instruções)

### Requisitos 

 - É necessário utilizar algum utilitário de linha de comando do seu ambiente (as instruções fornecidas aqui estão utilizando o **Bash** do Linux como exemplo. Caso você não esteja utilizado o Linux utilize os respectivos comandos equivalentes necessários).
 - É necessário ter o [Git](https://git-scm.com/) instalado em seu ambiente
 - É necessário ter o [Docker](https://www.docker.com/) instalado em seu ambiente

Faça um clone do [projeto](https://github.com/pablim/coodesh-challenge) `git clone https://github.com/pablim/coodesh-challenge` na sua máquina. O repositório contém dois projetos [**reactjs-app**]() (frontend) e [**nodejs-api**]() (backend).

### Executando o backend

1. Através do console entre na pasta do projeto (**nodejs-api**) `cd coodesh-challenge/nodejs-api`. 
2. Crie a imagem do projeto com o Docker utilizando o comando `sudo docker build -t nodejs-api .` (não esqueça de incluir o ponto "." após o nome do diretório no comando anterior) 
3. Estamos utilizando o docker-compose para criar o servidor de banco de dados utilize `sudo docker-compose up -d` para criar a imagem e executar o container. 
4. Agora basta criar o container da aplicação também com o Docker `sudo docker run -it --rm --add-host=host.docker.internal:host-gateway -p 5000:5000 -e PORT=5000 -e DBPORT=5433 -e DBUSER=postgres -e DATABASE=coodesh_challenge -e DBHOST=host.docker.internal -e DBPASSWORD=123 nodejs-api`. Repare que as variáveis de ambiente são passadas junto com o comando.

### Executando o frontend
 
1. Através do console entre na pasta do projeto (**reactjs-app**) `cd coodesh-challenge/reactjs-app`. 
2. Crie a imagem do projeto com o Docker utilizando o comando `sudo docker build -t reactjs-app .` (não esqueça de incluir o ponto "." após o nome do diretório no comando anterior).
3. Agora basta criar o container da aplicação também com o Docker `sudo docker run -it --rm -p 3000:3000 -e REACT_APP_GOOGLE_CLIENTE_ID=712715756828-hft35t6pn8ku7ahkummagpk81g7jov4e.apps.googleusercontent.com reactjs-app`. Repare que as variáveis de ambiente são passadas junto com o comando.

### Utilizando o sistema

 
This is a challenge by [Coodesh](https://coodesh.com/) 
