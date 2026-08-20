import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true});   

let matricula = prompt('Digite sua matricula: ');
let digitos = matricula; 
let soma = 0; 
while(digitos.length != 1){
    for(let i = 0; i < digitos.length; i++){
        soma = soma + Number(digitos.at(i));
    }
    digitos = String(soma); 
    soma = 0; 
}
matricula = matricula + '-' + digitos;
console.log(`Numero de matricula completo: ${matricula}`)