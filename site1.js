//importar o módulo express
var express = require("express")

//executar o express
var app = express()

//definir a porta do servidor
var porta = 4040

//atender a requisição /
app.get("/",(req,res)=>{
    res.send("<html><body><h1>Resposta da requisição /</h1><a href='/contato'>Acessar o contato</a></body></html>")
})

//atender a requisição /contato
app.get("/contato",(req,res)=>{
    //res.send("<html><body><h1>Resposta da requisição /contato</h1><a href='/'>Acessar o início</a></body></html>")
    res.render("contato.ejs",{mensagem:"Este conteúdo foi enviado pelo site1.js"})
})

//atender a requisição /nova renderizando o arquivo nova.ejs
app.get("/nova",(req,res)=>{
    res.render("nova.ejs")
})

//ligar o servidor,

app.listen(porta,()=>{
    console.log("Servidor em http://localhost:"+porta)
})