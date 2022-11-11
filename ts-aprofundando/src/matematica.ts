function somar(x:number, y: number): number{
    return x + y
}

function subtrair(x:number, y: number): number{
    return x - y
}

function multiplicar(x:number, y: number): number{
    return x * y
}

// module.exports.somar = somar  //exporta a funcao somar
// module.exports.subtrair = subtrair  //exporta a funcao subtrair
// module.exports.multiplicar = multiplicar   //exporta a funcao multiplicar
export default {
    somar,
    subtrair,
    multiplicar
}