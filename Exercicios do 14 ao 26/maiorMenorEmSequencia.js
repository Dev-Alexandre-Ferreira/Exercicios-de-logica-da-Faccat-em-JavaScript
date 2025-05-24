alert("Retornando em sequência");

let numeroUm = parseInt(prompt("Digite um numero inteiro: "));

let numeroDois = parseInt(prompt("Digite outro numero inteiro: "));

if (numeroUm > numeroDois) {
  alert(`O maior numero digitado foi ${numeroUm} e o menor ${numeroDois}`);
} else if (numeroUm == numeroDois) {
  alert("Os dois numeros são iguais");
} else {
  alert(`O maior numero digitado foi ${numeroDois} e o menor ${numeroUm}`);
}
