alert("Média Ponderada");

let n1 = parseFloat(prompt("Digite a primeira nota: "));
let n2 = parseFloat(prompt("Digite a segunda nota: "));
let n3 = parseFloat(prompt("Digite a terceira nota: "));

let p1 = n1 * 2;
let p2 = n2 * 3;
let p3 = n3 * 5;

let media = (p1 + p2 + p3) / 10;

alert(`A sua média final é ${media}`);
