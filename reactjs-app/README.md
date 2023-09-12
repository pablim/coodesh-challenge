### Executando o frontend
 
1. Através do console entre na pasta do projeto (**reactjs-app**) `cd coodesh-challenge/reactjs-app`. 
2. Crie a imagem do projeto com o Docker utilizando o comando `sudo docker build -t reactjs-app .` (não esqueça de incluir o ponto "." após o nome do diretório no comando anterior).
3. Agora basta criar o container da aplicação também com o Docker `sudo docker run -it --rm -p 3000:3000 -e REACT_APP_GOOGLE_CLIENTE_ID=712715756828-hft35t6pn8ku7ahkummagpk81g7jov4e.apps.googleusercontent.com reactjs-app`. Repare que as variáveis de ambiente são passadas junto com o comando.