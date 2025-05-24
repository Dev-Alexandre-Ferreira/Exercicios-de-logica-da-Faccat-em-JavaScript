alert("Bem-vindo ao Estoque");

let quantidadeAtual = parseInt(
  prompt("Digite a quantidade atual do estoque: ")
);
let quantidadeMaxima = parseInt(
  prompt("Digite a quantidade maxima do estoque: ")
);
let quantidadeMinima = parseInt(
  prompt("Digite a quantidade minima do estoque: ")
);

let media = (quantidadeMaxima + quantidadeMinima) / 2;

if (quantidadeAtual >= media) {
  alert("Não precisa efetuar a compra");
} else {
  alert("Efetuar a compra");
}
