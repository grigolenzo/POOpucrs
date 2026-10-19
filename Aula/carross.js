class Carro{
    placa;
    modelo;
    tamanhoTanque;
    qtdCombustivel;
    consumoKmL;

    combustivelNecessario(distancia){
        return distancia / this.consumoKmL;
    }

    podeViajar(distancia) {
        const precisaDeCombustivel = this.combustivelNecessario(distancia) <= this.qtdCombustivel;
        
        if (!precisaDeCombustivel) {
            console.log("Não dá para viajar, combustível insuficiente!");
        }

        return precisaDeCombustivel;
    }

    toString(){
        let str = `Placa: ${this.placa}, Modelo: ${this.modelo}, Tamanho do Tanque: ${this.tamanhoTanque}L, Quantidade de Combustível: ${this.qtdCombustivel}L, Consumo: ${this.consumoKmL}km/L \n`;
        return str;
    }
}

let carro1 = new Carro();
carro1.placa = "ABC-1234";
carro1.modelo = "Fiat Uno";
carro1.tamanhoTanque = 50;
carro1.qtdCombustivel = 20;
carro1.consumoKmL = 12;

console.log(carro1.toString());
console.log(`Combustível necessário para viajar 100 km: ${carro1.combustivelNecessario(100)}L`);
console.log(`Pode viajar 100 km? ${carro1.podeViajar(100)}`);