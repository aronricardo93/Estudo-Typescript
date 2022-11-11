//funcao com parametros tipados e com retorno sem tipagem
function firstLetterUpperCase(nome: string){
    let firstLetter = nome.charAt(0).toUpperCase
    return firstLetter+nome.substring(1)
}

let nome = firstLetterUpperCase('aron')

//funcao com parametros e retorno tipados
function somar(numero1: number, numero2: number): boolean {
    let soma : number = numero1 + numero2
    
    return (soma > 10) ? true : false //retorna true caso a soma > 10, caso contrário retona false
}

let resultado = somar(8, 20)
