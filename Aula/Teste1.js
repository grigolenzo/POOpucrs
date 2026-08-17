import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true});

const notaMin = 7.0;
let nome = prompt("Digite seu nome: ");
let nota1 = Number(prompt("Digite sua nota: " ));
let nota2 = Number(prompt("Digite sua segunda nota: ")); 

let media = (nota1 + nota2)/2 


console.log(`Nome: ${nome}, média: ${media}`);