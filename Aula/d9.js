import PromptSync from "prompt-sync";
import { validate } from "bycontract";  


const prompt = PromptSync({sigint: true});   

let idades = [];
let terminou = false; 
let cont = 0; 

while(!terminou){
    let idade = Number(prompt(`Entre a idade do ${cont+1}o colega: `));
    if(Number(idade)== -1){
        break;
    }else{
        idades[cont] = idade; 
        cont++; 
    }
}

let resp = prompt("De qual idade deseja verificar a frequencia? ")
let idadeFreq = Number(resp);
let freq = 0; 
let maiores = 0; 

for(let i = 0; i<idades.length; i++){
    if (idades[i] == idadeFreq){
        freq++
    }
    if(idades[i] > idadeFreq){
        maiores++; 
    }
}

console.log(`Qtd colegas com ${idadeFreq} anos: ${freq}`);
console.log(`Qtd de colegas com mais de ${idadeFreq}: ${maiores}`);