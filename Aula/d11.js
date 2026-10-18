class Retangulo{
    base;
    altura;

    perimetro(){
        return (this.base + this.altura) * 2;
    }

    area(){
        return this.base * this.altura;
    }

}


let ret1 = new Retangulo();
ret1.base = 5;
ret1.altura = 10;

console.log(`Base: ${ret1.base}`);
console.log(`Altura: ${ret1.altura}`);
console.log(`Perímetro: ${ret1.perimetro()}`);
console.log(`Área: ${ret1.area()}`);