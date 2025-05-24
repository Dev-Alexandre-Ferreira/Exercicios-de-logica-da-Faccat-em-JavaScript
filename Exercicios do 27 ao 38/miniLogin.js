alert("Bem-vindo a simulação de login");

let tentativaCodigo = prompt("Digite o codigo do usuario em forma de número");
let tentativaSenha;
let codigo = "1234";
let senha = "9999";

if (tentativaCodigo != codigo) {
  alert("Usuário Invalido!");
} else {
  tentativaSenha = prompt("Digite a Senha do usuario em forma de número");

  if (tentativaSenha != senha) {
    alert("Senha Incorreta!");
  } else {
    alert("Acesso Permitido!");
  }
}
