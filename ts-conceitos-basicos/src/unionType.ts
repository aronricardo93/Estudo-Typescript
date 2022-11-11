//Union Types são variáveis/parametros com multiplos tipos

let cpf : string | number 

function algumaCoisa(parametro: string | boolean){
    console.log(parametro)
}

algumaCoisa("oi")
algumaCoisa(false)