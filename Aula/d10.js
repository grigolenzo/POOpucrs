import { validate } from "bycontract";

function randomInt(min, max) {
  validate(arguments, ["number", "number"]);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function mulNeg(lst) {
  validate(lst, "Number[]");
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] < 0) {
      lst[i] = lst[i] * -2;
    }
  }
  return lst;
}

function maiorMenor(lst, maior) {
  validate(arguments, ["Number[]", "boolean"]);
  let resp = lst[0];
  if (maior == true) {
    for (let i = 1; i < lst.length; i++) {
      if (resp < lst[i]) {
        resp = lst[i];
      }
    }
  } else {
    for (let i = 1; i < lst.length; i++) {
      if (resp > lst[i]) {
        resp = lst[i];
      }
    }
  }
  return resp;
}

function arrayToString(lst) {
  validate(lst, "Number[]");
  let str = "";
  for (let e of lst) {
    str = str + "[" + e + "]";
  }
  return str;
}

let nros = new Array(100);
for (let i = 0; i < 100; i++) {
  nros[i] = randomInt(-100, 100);
}

console.log(arrayToString(nros));
console.log("=".repeat(50));
console.log(arrayToString(mulNeg(nros)));
console.log("=".repeat(50));
console.log(maiorMenor(nros, true));
