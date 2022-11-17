import { Request, Response } from "express"
import { Product } from '../models/Product'


export const home =  (req:Request, res:Response) => {
    
    let usuario = {
        nome: "Isis",
        idade: 1
    }

    let maiorIdade: boolean = (usuario.idade >= 18) ? true : false

    let lista = Product.getAll()
    let produtosCaros = Product.getFromPriceAfter(12)

    res.render('pages/home', {
        user: "Aron", //1º parametro: nome do view(arquivo html). 2º parametro: envio da variárel para o view
        usuario,
        maiorIdade,
        products: lista,
        produtosAcima: produtosCaros,
        frasesDoDia: [
            'Jesus é Bom!',
            'Eu sou baterista de Cristo',
            'Nossa família é abençoada! '
        ]
    }) 
}