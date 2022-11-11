let numero1 = document.getElementById('numero1') as HTMLInputElement //type assertion: diz pro ts que ai é um campo do html
let numero2 = document.getElementById('numero2') as HTMLInputElement
let botao = document.getElementById('calcular') as HTMLButtonElement
let res = document.getElementById('resultado') as HTMLDivElement

function calcular(n1: number, n2: number){
    return n1 + n2
}

botao.addEventListener('click', function() {
                    /* converter para variável para numero: +variavel, 
                    parseInt(variavel) ou Number(variavel) */
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString() 
})