alert("Total do Produto");

let produto = prompt("Digite o nome do produto: ");
let quantidadeProduto = parseInt(
  prompt("Digite a quantidade do produto adquirido: ")
);
let precoUnitario = parseFloat(prompt("Digite o valor unitário"));

let total;
let desconto;
let valorFinal;

total = quantidadeProduto * precoUnitario;

if (quantidadeProduto <= 5) {
  desconto = (total * 2) / 100;
  valorFinal = total - desconto;
  alert(
    `O valor total a ser pago é ${valorFinal.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}`
  );
} else if (quantidadeProduto > 5 && quantidadeProduto <= 10) {
  desconto = (total * 3) / 100;
  valorFinal = total - desconto;
  alert(
    `O valor total a ser pago é ${valorFinal.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}`
  );
} else {
  desconto = (total * 5) / 100;
  valorFinal = total - desconto;
  alert(
    `O valor total a ser pago é ${valorFinal.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}`
  );
}
