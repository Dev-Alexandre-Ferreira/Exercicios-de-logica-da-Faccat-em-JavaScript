alert("Maior ou menor ?");

let numeroUm = parseInt(prompt("Digite um numero inteiro: "));

let numeroDois = parseInt(prompt("Digite outro numero inteiro: "));

if (numeroUm > numeroDois) {
  alert(`O maior numero digitado foi ${numeroUm}`);
} else if (numeroUm == numeroDois) {
  alert("Os dois numeros são iguais");
} else {
  alert(`O maior numero digitado foi ${numeroDois}`);
}
