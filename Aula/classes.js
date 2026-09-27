/* Classes e objetos em JS */

class Aluno{
    matricula;
    nome;
    notaP1;
    notaP2;
}

let a1 = new Aluno();  // instancia de uma classe e objeto de uma classe são sinonimos - new cria uma isntancia de aluno
a1.matricula = 123;
a1.nome = "João";
a1.notaP1 = 7;
a1.notaP2 = 8;

let a2 = new Aluno();
a2.matricula = 456;
a2.nome = "Maria";
a2.notaP1 = 9;
a2.notaP2 = 10;

/* Objetos e métodos
Podemos guardar operações associadas a essas classes, são chamadas de métodos, que são funções associadas a uma classe.
Propriedades descrevem carateristicas estáticas
Mas podemos descrever caracteristicas dinâmicas, que são operações que podem ser realizadas com os objetos da classe, e essas operações são chamadas de métodos.
*/

class Aluno2{
    matricula;
    nome;
    notaP1;
    notaP2;

    media(){
        return (this.notaP1 + this.notaP2) / 2;
    }

    aprovado(){
        return this.media() >= 6;
    }
}