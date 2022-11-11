import express,{Request, Response} from 'express' //importa todas as funções do express
import mustache from 'mustache-express'
import path from 'path'
import routeIndex from './routes/contatoRoute'
import routeNoticia from './routes/noticiasRoute'
import routeHome from './routes/homeRoute'

const server  = express()

server.set('view engine', 'mustache')  //indica as configurações que o template engine vai usar
server.set('views', path.join(__dirname, 'views'))  //indica aonde fica os arquivos em html do projeto
server.engine('mustache', mustache()) //define a engine, que no caso é o mustache e registra no express

server.use(express.static(path.join(__dirname, '../public'))) //tornou a pasta public estática
server.use("/informacoes",routeIndex) //prefixo "/contrato"(ñ obrigatório)
server.use("/noticia",routeNoticia) //prefixo "/noticia"(ñ obrigatório)
server.use(routeHome) 

server.listen(3000, () => console.log("Server running..."))