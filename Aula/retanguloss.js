class Retangulo {
  lado1;
  lado2;
  
  area() {
    return this.lado1 * this.lado2;
  }

  perimetro() {
    return 2 * (this.lado1 + this.lado2);
  }

  toString(){
    let str = `lado1: ${this.lado1}, lado2: ${this.lado2} \n`;
    str += `Área: ${this.area()}, Perímetro: ${this.perimetro()}\n`;
    return str; 
  }

}

let ret1 = new Retangulo();
ret1.lado1 = 10;
ret1.lado2 = 20;

console.log("Área do retângulo: " + ret1.area());
console.log("Perímetro do retângulo: " + ret1.perimetro());
console.log(ret1.toString());

let ret2 = new Retangulo();
ret2.lado1 = 15;
ret2.lado2 = 25;

console.log("Área do retângulo: " + ret2.area());
console.log("Perímetro do retângulo: " + ret2.perimetro());
console.log(ret2.toString());