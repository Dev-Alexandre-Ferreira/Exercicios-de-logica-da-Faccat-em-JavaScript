alert("Pode ou não votar?");

let anoNascimento = parseInt(prompt("Digite o ano em que você nasceu: "));
let anoAtual = parseInt(prompt("Digite o ano atual: "));

let autorizacao = anoAtual - anoNascimento;

if (autorizacao >= 18) {
  alert("Você é maior de idade, e é obrigado a votar!");
} else if (autorizacao >= 16 && autorizacao < 18) {
  alert("Você pode votar mas não é obrigado");
} else {
  alert("Você não pode votar");
}
