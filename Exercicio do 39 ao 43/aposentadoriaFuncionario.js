alert("Descubra se já pode se aposentar");

let codigo = parseInt(prompt("Digite o codigo do funcionário"));
let dataNasci = parseInt(prompt("Digite o ano de nascimento"));
let dataAtual = parseInt(prompt("Digite o ano atual"));
let anoIngressou = parseInt(
  prompt("Digite o ano em que o funcionário ingressou")
);

let idade = dataAtual - dataNasci;
let tempoServico = dataAtual - anoIngressou;

if (idade >= 65) {
  alert(
    `idade: ${idade} \n Tempo de serviço: ${tempoServico} \n Requerer aposentadoria! `
  );
} else if (tempoServico >= 30) {
  alert(
    `idade: ${idade} \n Tempo de serviço: ${tempoServico} \n Requerer aposentadoria! `
  );
} else if (idade >= 60 && (tempoServico = 25)) {
  alert(
    `idade: ${idade} \n Tempo de serviço: ${tempoServico} \n Requerer aposentadoria! `
  );
} else {
  alert("Não requerer aposentadoria!");
}
