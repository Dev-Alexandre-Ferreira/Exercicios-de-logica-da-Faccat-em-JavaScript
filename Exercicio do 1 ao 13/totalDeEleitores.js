alert("Percentual de Eleitores");

let totalDeEleitores = parseInt(prompt("Digite o número total de Eleitores: "));

let votosEmBranco = parseInt(prompt("Digite o número de votos em Branco: "));

let votosNulo = parseInt(prompt("Digite o número de votos anulados: "));

let votosValidos = parseInt(prompt("Digite o número de votos válidos: "));

let perceVotosBranco = (votosEmBranco / totalDeEleitores) * 100;

let perceVotosNulo = (votosNulo / totalDeEleitores) * 100;

let perceVotosValidos = (votosValidos / totalDeEleitores) * 100;

alert(
  `Um total de ${totalDeEleitores} eleitores votaram, sendo ${perceVotosBranco}% em Branco, ${perceVotosNulo}% votos Nulo e ${perceVotosValidos}% votos validos!`
);
