/* Método construtor, roda automaticamente quando cria a instancia do objeto (let a1 = new Aluno(1025,'jose dias')) passamos por parametro o numero de matricula e o nome, atribuindo os valores para as propriedades do aluno em especifico sendo criado no momento, passa a ser impossivel criar um objeto sem esses valores   */

import { validate } from "bycontract"; 

class Aluno{
    #matricula;
    #nome;
    #notaP1;
    #notaP2;

    constructor(matricula, nome){ /* Ele exige matricula e nome por parametros */
        validate(arguments,["number","string"]);

        if(matricula<1000 || matricula >9999){
            matricula = -1;
        }

        if(nome.length==0){
            nome = 'none'
        }

        this.matricula = matricula;
        this.nome = nome;
        this.notaP1 = -1.0;
        this.notaP2 = -1.0;  /* Quando for construir o metodo media se a nota estao em -1 return NaN ou Undefined, se não retorna o calculo */
    }

    media(){
        if(this.notaP1 === -1 || this.notaP2 === -1){
            return NaN;
        }else{
            return(this.notaP1+this.notaP2)/2;
        }
    }

    aprovado(){
        this.media()>=7.0;
    }

    toString(){
        let str = "";
        if(this.matricula === -1  || this.nome==='none'){
            str = 'Dados inválidos';
        }else{
            str += `Matricula: ${this.matricula}, Nome:${this.nome}\n`;
            if(this.notaP1 === -1.0 || this.notaP2===-1.0){
                str+='Notas não disponiveis';
            }else{
                str += `Prova 1:${this.notaP1}, Prova2:${this.notaP2}\n`;
                str += `Media:${this.media()}, Situacao:`;
                if(this.aprovado()){
                    str+='aprovado'
                }else{
                    str+='reprovado';
                }
            }
            return str;
        }
    }
}

let a1 = new Aluno(1025, 'Jose Dias');

let a2 = new Aluno(1026,'Chris Goes');

a2.notaP1 = 6.8;
a2.notaP2 = 9.0;

console.log(a1.toString());
console.log(a2.toString());