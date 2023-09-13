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
 - React Router 
 - Axios 
 - Sass 
 - Bootstrap

## Instalação e utilização

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

- Acesse http://localhost:3000 ou clique em **login** na barra de navegação superior para fazer login com o Google. 
- Acesse http://localhost:3000/sendfile ou clique em **Send sales file** la lateral esquerda para enviar o arquivo com as transações de produtores/afiliados. Efetuando o envio o arquivo será processado e armazenado no banco de dados da aplicação. Uma resposta será retornada com os dados consolidados na mesma página. 
- Acesse http://localhost:3000/consolidated ou clique em **Consolidated data** para ver os dados consolidados novamente.

## Apresentação

- [Parte 1](https://www.loom.com/share/f621ea7e017043828b28398f7a93aca4?sid=b3a2f3e8-58ab-498c-9f33-85a3ea7642fd)
- [Parte 2](https://www.loom.com/share/1bf6b149fa7244c6a0c6343f5cce1533?sid=e8ffe54f-4505-4fe6-bf02-01acbe7c6057)

> This is a challenge by [Coodesh](https://coodesh.com/)

