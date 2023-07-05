#API RESTFUL 🔌
Utilizando arquitetura MVC
##Dependências :clipboard:
> ***config:*** ^3.3.9
> ***dotenv:*** ^16.3.1
> ***express:*** ^4.18.2
> ***express-validator:*** ^7.0.1
> ***mongoose:*** ^7.3.1
> ***morgan:*** ^1.10.0
> ***winston:*** ^3.9.0

##Dependências de desenvolvimento 📜
> ***@types/config:*** ^3.3.0
> ***@types/express:*** ^4.17.17
> ***@types/mongoose:*** ^5.11.97
> ***@types/morgan:*** ^1.9.4
> ***@types/node:*** ^20.3.3
> ***ts-node-dev:*** ^2.0.0
> ***typescript:*** ^5.1.6

#####Para testar: 🔧
* Execute na pasta root:
  > npm install
* **Crie um arquivo '.env' na pasta root, com o seguinte conteúdo de configurações:**
DB_USER=Seu usuário na sua database MongoDB Atlas
DB_PASS=Sua senha na sua database MongoDB Atlas
APP_PORT=Porta para rodar a aplicação
<br>
* **No arquivo config/default.ts:**
  Troque o valor de ***dbUri*** para a string com a conexão da sua database MongoDB Atlas, substituindo o username e o password pelas variáveis ***dbUser*** e ***dbPassword**.
  <br>
    > Ex: ***dbUri:*** `mongodb+srv://${dbUser}:${dbPassword}@hfidelis-api-rest.cvmr4ps.mongodb.net/hfidelisDB?retryWrites=true&w=majority`
* **Execute na pasta raíz o script de desenvolvimento setado no package.json:**
  <br>
    > npm run dev
* **Teste as rotas e os métodos disponíveis.**