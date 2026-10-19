class Retangulo{
    lado1;
    lado2;

    areaRet(){
        return this.lado1*this.lado2
    }

    perimetroRet(){
        return 2*(this.lado1+this.lado2)
    }

}

let ret1 = new Retangulo();
ret1.lado1 = 5;
ret1.lado2 = 10;


console.log(`A area do retangulo é ${ret1.areaRet()}`);
console.log(`O perimetro do retangulo é ${ret1.perimetroRet()}`);

