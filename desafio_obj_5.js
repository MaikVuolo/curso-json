const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]


function encontrarFuncionarioPorId (id){
    let funcionarioEncontrado;
    for(const departamento of departamentos){
        // const funciorioEncontrado = departamento.funcionarios.find (funcionario => funcionario.id === id)
        funcionarioEncontrado = departamento.funcionarios.find(funcionario => funcionario.id === id);
        console.log(funcionarioEncontrado);
        
        
    }
    return funcionarioEncontrado;
}
//     for (const departamento of departamentos) {
//         const funcionarioEncontrado = departamento.funcionarios.find(funcionario => funcionario.id === id);
//         if (funcionarioEncontrado) {
//             return funcionarioEncontrado;
//         }
//     }
//     return null;
// }
 
console.log(encontrarFuncionarioPorId(202));



// function encontrandoFuncionarios (lista,chave){
//     return lista.forEach(prop =>{
//         const array = [] {
//         if (departamento.hasOwnProperty("funcionarios")){
//             return departamento.funcionarios;
//         }})
//     return arrayFuncionarios
//     // departamentos["funcionarios"].find(departamento => departamento["id"] === identificar);
// }

// console.log(encontrarFuncionarioPorId());
