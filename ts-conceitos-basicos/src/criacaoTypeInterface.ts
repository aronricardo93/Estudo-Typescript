// Primeira forma de criar os próprios types(tipos)
// Uma vez definido o type não há como adicionar novas propriedades
type Idade = string | number

let idade: Idade = 30

function mostraIdade(age: Idade): Idade {
    return age
}

type Cadastro = {
    nome: string,
    idade: number,
    cpf: string,
    estadoCivil: string,
}

function resumo(usuario: Cadastro){
    console.log(usuario)
}

resumo({
    nome: "Aron",
    idade: 29,
    cpf: "2029349909409",
    estadoCivil: "Casado"
})

// Segunda forma de criar os próprios types(tipos)
// somente é usado para objetos
// Pode adicionar novas propriedade
interface User {
    nome: string,
    idade: 29,
    profissao:string
}

interface User {  //adicionando propriedade
    formacao: boolean
}