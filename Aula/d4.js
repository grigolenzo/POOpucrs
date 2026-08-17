import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true}); 

let valor_ingresso = 500.00;
let categoria = prompt("Qual sua categoria: ");
let valor_cobrado = valor_ingresso; 

switch(categoria){
    case "Criança":
        valor_cobrado = 0; 
        break; 
    case "Funcionário Idoso":
        valor_cobrado = valor_cobrado * (50/100);
    case "Funcionario":
        valor_cobrado = valor_cobrado * (50/100);
        break;
    case "Idoso":
        valor_cobrado = valor_cobrado * (50/100);
        break;
    case "Convidado":
        valor_cobrado = valor_cobrado * (25/100);
        break;
    case "Geral":
        break;
    default: 
        valor_cobrado = NaN;
}

if (!isNaN(valor_cobrado)){
    console.log(`Valor cobrado: R$${valor_cobrado.toFixed(2)}`);
}else{
    console.log('Categoria inválida');
}

