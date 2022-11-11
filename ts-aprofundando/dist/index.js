"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const matematica = require('./matematica') //importando versão CommonJS
//import {somar} from './matematica' // se quisesse usar somente a função somar
const matematica_1 = __importDefault(require("./matematica")); //importando versão ES6 
let nome = 'Aron';
let idade = 29;
console.log(`Olá, ${nome}. Você tem ${idade} anos!`);
console.log(`Soma: ${matematica_1.default.somar(2, 2)}`);
console.log(`Subtração: ${matematica_1.default.subtrair(2, 2)}`);
console.log(`Multiplicação: ${matematica_1.default.multiplicar(2, 2)}`);
