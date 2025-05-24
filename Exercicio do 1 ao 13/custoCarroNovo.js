alert("valor do carro novo");

let precoFabrica = parseFloat(prompt("Informe o custo de fabrica do carro: "));

let perceVendedor = (28 / 100) * precoFabrica;

let perceImposto = (45 / 100) * precoFabrica;

let precoFinal = precoFabrica + perceImposto + perceVendedor;

let formatado = precoFinal.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});

alert(`O custo final do carro é de ${formatado} !`);
