// While 
let limite = 100;
let n = 0;

while(n<limite){
    console.log(n)
    n += 2; 
}

// do-while 

limite = 100;
n = 0; 

do{
    console.log(n);
    n += 2;
}while(n<limite);

// for 

for(n=0;n<limite;n+=2){
    console.log(n);
}

// lacos com break

let limite = 100;
let n = 0; 
while(n<limite){
    console.log(n);
    if(n > 0 && n%10 === 0){
        let rp=prompt("Parar? (s/n)");
        if (rp === 's'){
            break;
        }
    }
    n += 2;
}

console.log("Fim")