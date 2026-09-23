import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true});   

/* 
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
console.log(`Numero de matricula completo: ${matricula}`) */

function acrescentaVerificador(matricula){
    let digitos = matricula; 
    let soma = 0; 
    while(digitos.length != 1){
        for(let i = 0; i < digitos.length; i++){
            soma = soma + Number(digitos.at(i));
        }
        digitos = String(soma); 
        soma = 0; 
    }
    return matricula + '-' + digitos;
    
}

let matricula = '111111'; //prompt('Digite sua matricula: ');
let matriculaCompleta = acrescentaVerificador(matricula);
console.log(`Numero de matricula completo: ${matriculaCompleta}`) 
