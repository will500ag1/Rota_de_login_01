//Importar módulo express
const express = require('express');
const { ExpressHandlebars } = require('express-handlebars');

//Importar módulo express handle_bars
const {engine} = require('express-handlebars');

//Importar módulo mysql

const mysql = require('mysql2');

//App
const app = express();

//Adicionar Bootstrap

app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));

//Configuração do express-handle-bars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//Configuração de conexão
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'projeto'
});

//Rota principal
        conexao.connect(function(erro){
            if(erro) throw erro;
            console.log("Conexão efetuada com sucesso!")
        });
// Rota Hello World

app.get('/',function(req, res){
    res.render('formulario');
} );

// Servidor
app.listen(8081);
