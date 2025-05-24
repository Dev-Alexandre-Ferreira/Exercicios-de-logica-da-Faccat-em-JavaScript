alert("Valor a pagar pelas frutas");

let morango = parseInt(
  prompt("Digite a quantidade de morangos em Kg que você está levando")
);
let maca = parseInt(
  prompt("Digite a quantidade de maças em Kg que você está levando")
);
let valorMorango;
let valorMaca;
let valorTotal;
let precoFinal;
let desconto;

let somaTotal = morango + maca;

if (morango <= 5) {
  valorMorango = morango * 2.5;
} else {
  valorMorango = morango * 2.2;
}

if (maca <= 5) {
  valorMaca = maca * 1.8;
} else {
  valorMaca = maca * 1.5;
}

valorTotal = valorMaca + valorMorango;

if (somaTotal > 8 || valorTotal > 25) {
  desconto = (valorTotal * 10) / 100;
  valorTotal = valorTotal - desconto;
}

alert(
  `O valor total da sua compra é de ${valorTotal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}`
);
