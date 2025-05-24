alert("Conversor de Temperatura");

let fahren = parseFloat(
  prompt("Digite a temperatura em fahrenheit para converter pra celcius: ")
);

let celcius = (5 / 9) * (fahren - 32);

alert(`${fahren} Fº convertido para Celcius é igual á ${celcius} ºC`);
