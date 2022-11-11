//const matematica = require('./matematica') //importando versão CommonJS
//import {somar} from './matematica' // se quisesse usar somente a função somar
import matematica from './matematica'  //importando versão ES6 

let nome : string = 'Aron'
let idade : number = 29

console.log(`Olá, ${nome}. Você tem ${idade} anos!`)

console.log(`Soma: ${matematica.somar(2,2)}`)
console.log(`Subtração: ${matematica.subtrair(2,2)}`)
console.log(`Multiplicação: ${matematica.multiplicar(2,2)}`)