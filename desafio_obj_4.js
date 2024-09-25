const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

function ordenarAnimais(comparacao){
    return animais.sort(comparacao)
}

function ordenarOrdemCrescente(a,b){
    if(a["nome"]> b["nome"]) return 1;
    if(a["nome"]< b["nome"]) return -1;
    return 0;
}

function ordenarOrdemDecrescente(a,b){
    if(a["nome"]> b["nome"]) return -1;
    if(a["nome"]< b["nome"]) return 1;
    return 0;
}

console.log(ordenarAnimais(ordenarOrdemDecrescente));

console.log(ordenarAnimais(ordenarOrdemCrescente));

