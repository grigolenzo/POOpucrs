import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true}); 

const valor_suco = 5.2; 
const valor_sanduiche = 12; 

let qtd_suco = prompt("Quantidade de sucos: "); 
let qtd_sanduiche = prompt("Quantidade de sanduiches: "); 

let total_suco = qtd_suco * valor_suco;
console.log(`O total de sucos deu: ${total_suco}`)
let total_sanduiche = qtd_sanduiche * valor_sanduiche; 
console.log(`O total de sanduiches deu: ${total_sanduiche}`)

if(qtd_suco > 10){
    total_suco = total_suco * 0.8; // * (20/100)
    console.log(`Foi aplicado um desconto de 20% no valor do suco: ${total_suco.toFixed(2)}`);
} 

if(qtd_sanduiche > 10){
    total_sanduiche = total_sanduiche * 0.8;
    console.log(`Foi aplicado um desconto de 20% no valor do sanduiche: ${total_sanduiche.toFixed(2)}`);
} 

let total = (total_suco + total_sanduiche)

console.log(`Valor da conta: ${total.toFixed(2)}`); 