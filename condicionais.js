import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true});

let resp = prompt("DIgite a nota final do aluno: ");
let nota = Number(resp); 

if (nota >= 7){
    console.log("Aluno aprovado!");
}else{
    console.log("Aluno reprovado :(");
}


/* escopo de variaveis */ 

