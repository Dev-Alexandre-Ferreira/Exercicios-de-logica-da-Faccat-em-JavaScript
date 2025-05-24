alert("Soma e multiplicação das idades");

let homemUm = parseInt(prompt("Digite a idade do primeiro homem"));
let homemDois = parseInt(prompt("Digite a idade do segundo homem"));
let mulherUm = parseInt(prompt("Digite a idade da primeira mulher"));
let mulherDois = parseInt(prompt("Digite a idade da segunda mulher"));
let total;
let totalDois;

if (mulherUm < mulherDois && homemUm < homemDois) {
  total = mulherUm + homemDois;
  totalDois = mulherDois * homemUm;
  alert(
    `A soma da Mulher mais nova com o Homem mais velho é ${total} \n e o produto do Homem mais novo com a Mulher mais velha é ${totalDois}`
  );
} else {
  total = mulherDois + homemUm;
  totalDois = mulherUm * homemDois;
  alert(
    `A soma da Mulher mais nova com o Homem mais velho é ${total} \n e o produto do Homem mais novo com a Mulher mais velha é ${totalDois}`
  );
}
