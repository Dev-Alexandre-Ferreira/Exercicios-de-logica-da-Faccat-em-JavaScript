alert("Bem-vindo ao placar");

let time1 = prompt("Digite o nome do primeiro time");
let time2 = prompt("Digite o nome do segundo time");
let primeiroTime = parseInt(prompt("Digite quantos gols fez o primeiro time"));
let segundoTime = parseInt(prompt("Digite quantos gols fez o segundo time"));

if (primeiroTime > segundoTime) {
  alert(`${time1} é o vencedor!`);
} else if (segundoTime > primeiroTime) {
  alert(`${time2} é o vencedor!`);
} else {
  alert("Deu empate!");
}
