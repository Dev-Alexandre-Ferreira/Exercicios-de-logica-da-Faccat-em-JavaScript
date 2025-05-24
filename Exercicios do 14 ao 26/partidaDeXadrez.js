alert("Tempo da partida");

let inicio = parseInt(prompt("Digite o horário em que a partida começou: "));
let final = parseInt(prompt("Digite o horário em que a partida terminou: "));
let partida;

if (inicio < final) {
  partida = final - inicio;
} else {
  partida = 24 - inicio + final;
}

alert(`A partida durou ${partida} horas!`);
