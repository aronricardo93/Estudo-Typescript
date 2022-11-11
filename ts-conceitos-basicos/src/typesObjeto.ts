function resumo(usuario: {nome: string, idade: number}){
    return `Olá, ${usuario.nome}. Você tem ${usuario.idade} anos`
}

let u = {
    nome : 'Aron',
    idade: 29
}

resumo(u)

/* ----------------------------------------------------------------- */

/*A "?" deixa o a propriedade do objeto opcional.
Ex: */  function resumo2(usuario: {nome: string, idade?:number}){
            if(usuario.idade === undefined){
                return `Olá, ${usuario.nome}!`
            }else{
                return `Olá, ${usuario.nome}. Você tem ${usuario.idade} anos`
            }
        }
        
resumo2(u)