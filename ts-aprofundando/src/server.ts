import express,{Request, Response} from 'express' //importa todas as funções do express
import mustache from 'mustache-express'
import path from 'path'
import dotenv from 'dotenv'
import routeIndex from './routes/contatoRoute'
import routeNoticia from './routes/noticiasRoute'
import routeHome from './routes/homeRoute'

dotenv.config()

const server  = express()

server.set('view engine', 'mustache')  //indica as configurações que o template engine vai usar
server.set('views', path.join(__dirname, 'views'))  //indica aonde fica os arquivos em html do projeto
server.engine('mustache', mustache()) //define a engine, que no caso é o mustache e registra no express

server.use(express.urlencoded({extended: true}))//habilitando a coleta de dados detalhados via POST no corpo da requisição.
server.use(express.static(path.join(__dirname, '../public'))) //tornou a pasta public estática
server.use("/informacoes",routeIndex) //prefixo "/contrato"(ñ obrigatório)
server.use("/noticia",routeNoticia) //prefixo "/noticia"(ñ obrigatório)
server.use(routeHome) 

server.listen(process.env.PORT, () => console.log("Server running..."))