alert("Bem-vindo ao posto de gasolina");

let tipo = String(
  prompt("Qual combustivel você prefere \n A-álcool e G-gasolina")
);
let litros = parseFloat(prompt("Digite quantos litros você quer abastecer"));
let total;
let desconto;

if ((tipo === "a" || tipo === "A") && litros <= 20) {
  total = litros * 2.9;
  desconto = total - (total * 3) / 100;
  alert(
    desconto.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
  );
} else if ((tipo === "a" || tipo === "A") && litros > 20) {
  total = litros * 2.9;
  desconto = total - (total * 5) / 100;
  alert(
    desconto.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
  );
} else if ((tipo === "g" || tipo === "G") && litros <= 20) {
  total = litros * 3.3;
  desconto = total - (total * 4) / 100;
  alert(
    desconto.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
  );
} else if ((tipo === "g" || tipo === "G") && litros > 20) {
  total = litros * 3.3;
  desconto = total - (total * 6) / 100;
  alert(
    desconto.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
  );
} else {
  alert("Valores digitados incorretos!");
}
