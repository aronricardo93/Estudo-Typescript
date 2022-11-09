let nomes = ['lucas','joao','marcia','pedro', 91]


/*a cada item no forEach ele vai conferir se o tipo é string
caso sim, a primeira letra sera maiuscula senão somente
vai printar*/
nomes.forEach(function(nome){        
    if(typeof nome === 'string'){
        console.log(nome.toUpperCase())
    }else{
        console.log(nome)
    }
})