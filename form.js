let readlineSync = require ('readline-sync');

var listaDePecas = [];
var pesoDePecas = [];
var capacidade = 3;

for (let index = 0; index < capacidade; index++) {
    listaDePecas = readlineSync.question("Digite o nome da peças: ");    
    pesoDePecas = readlineSync.question("Digite o peso da peça: ")

}
for (let index = 0; index < capacidade; index++) {
    console.log(listaDePecas)
    console.log(pesoDePecas)
    
}