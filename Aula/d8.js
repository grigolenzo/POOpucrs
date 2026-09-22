import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true});   

function nivelAcessoOk(nivelAcesso){
    switch(nivelAcesso){
        case '1':
        case '21':
        case '35':
        case '66': 
            return true;
        default: 
            return false; 
    }
}

function acrescentaVerificador(matricula, nivelAcesso=21){
    let digitos = matricula; 
    let soma = 0; 
    while(digitos.length != 1){
        for(let i = 0; i < digitos.length; i++){
            soma = soma + Number(digitos.at(1));
        }
        digitos = String(soma);
        soma = 0; 
    }

    return nivelAcesso + matricula + '-' + digitos; 
}

let matricula = prompt('Entre seu numero de matrícula: ');
let nivel = prompt('Entre seu nivel de acesso: ');
if(nivelAcessoOk(nivel) == true){
    let matrCompleta = acrescentaVerificador(matricula, nivel);
    console.log(`Numero de matricula completo: ${matrCompleta}`);
}else{
    console.log('Nivel de acesso invalido');
}
