import { Router, Request, Response } from 'express'

const router = Router()

router.get('/home', (req:Request, res:Response) => {
    
    let usuario = {
        nome: "Isis",
        idade: 1
    }

    let maiorIdade: boolean = (usuario.idade >= 18) ? true : false

    res.render('pages/home', {
        user: "Aron", //1º parametro: nome do view(arquivo html). 2º parametro: envio da variárel para o view
        usuario,
        maiorIdade,
        products: [
            {title : 'Produto X', price: 10},
            {title : 'Produto Y', price: 15},
            {title : 'Produto W', price: 25}
        ],
        frasesDoDia: [
            'Jesus é Bom!',
            'Eu sou baterista de Cristo',
            'Nossa família é abençoada! '
        ]
    }) 
})

router.get("/contato", (req:Request, res:Response) => {
    res.render('pages/contato')
})

router.get("/sobre", (req:Request, res:Response) => {
    res.render('pages/sobre')
})

export default router