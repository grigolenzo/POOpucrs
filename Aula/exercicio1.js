import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true});

let preco = 10;
let novoPreco = 0; 
if(preco < 20){
    novoPreco = 50;

    // Aqui ele vai funcionar, essa variavel (novopreco) fica presa dentro do escopo do laço if 
    // não pode redeclarar a variavel dentro do escopo, e sim definir um novo valor dela chamando e colocando valor dentro da variavel já criada
}
console.log(novoPreco)
 