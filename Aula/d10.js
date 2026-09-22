function randomInt(min, max){
return Math.floor(Math.random() * (max - min + 1) + min)
}

function mulNeg(lst){
    for(let i = 0; i<lst.length;i++){
        if(lst[i] < 0 ){
           lst[i] = lst[i] * -2;  
        }
    }
    return lst;
}

function menor(lst){
    let menor = lst[0];
    for(let i = 1; i < lst.length; i++){
        if(menor > lst[i]){
            menor = lst[i];
        }
    }
    return menor; 
}

function arrayToString(lst){
    let str = "";
    for(let e of lst){
        str = str + '[' +e+ ']';
    }
    return str;
}

let nros = new Array(100);
for(let i=0;i<100;i++){
    nros[i]= randomInt(-100,100);
}

console.log(arrayToString(nros));
console.log(arrayToString(mulNeg(nros)));
console.log(menor(nros));