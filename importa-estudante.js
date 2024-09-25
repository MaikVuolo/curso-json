const estudantes = require("./estudantes.json");

function detalhesEstudante(lista,chave,valor){
    return lista.find((objEstudante) => objEstudante.endereco[chave] ===valor)
}

console.log(detalhesEstudante(estudantes,"cep","184366"));