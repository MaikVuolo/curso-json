const estudantes = require("./estudantes");

function buscandoPropriedade(lista, propriedade){
    return lista.filter((estudante)=> {
        return !estudante.endereco.hasOwnProperty(propriedade)
    })
}

console.log(buscandoPropriedade(estudantes,"cep"));
