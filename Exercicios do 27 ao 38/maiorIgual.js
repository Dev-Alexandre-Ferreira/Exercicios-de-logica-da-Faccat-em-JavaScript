alert("maior, menor ou iguais");

let numeroUm = parseInt(prompt("Digite o primeiro numero"));
let numeroDois = parseInt(prompt("Digite o segundo numero"));

if (numeroUm > numeroDois) {
  alert("O primeiro número é o maior!");
} else if (numeroDois > numeroUm) {
  alert("O segundo número é o maior!");
} else {
  alert("Os números digitados são iguais!");
}
