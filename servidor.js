var http = require('http')
var porta = 3030

http.createServer((req,res)=>{
    res.end("<html><body><h1>Criando um servidor local (localhost) node com scripts na porta "+porta+"</h1></body></html>")
}).listen(porta,()=>{
    console.log("servidor rodando em http://localhost:"+porta)
})