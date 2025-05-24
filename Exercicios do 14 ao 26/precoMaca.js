alert("Preço total das Maças");

let comprada = parseInt(prompt("Digite quantas maças você comprou: "));
let valorMaca;
let finalPreco;
let correcao;

if (comprada >= 12) {
  valorMaca = 1;
  finalPreco = valorMaca * comprada;
  correcao = finalPreco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  alert(`O preço total da sua compra é de ${correcao}`);
} else {
  valorMaca = 1.3;
  finalPreco = valorMaca * comprada;
  correcao = finalPreco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  alert(`O preço total da sua compra é de ${correcao}`);
}
