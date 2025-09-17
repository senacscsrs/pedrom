let cliente = prompt("Digite o nome do cliente:");
let endereco = prompt("Digite o endereço do cliente:");
let distanciaKm = parseFloat(prompt("Digite a distância em km:"));

let tempoHrs = distanciaKm / 40;
let tempoMin = tempoHrs * 60;

console.log(tempoMin);

let classificacao;

if (tempoMin <= 30) {
  classificacao = "Rápida";
} else if (tempoMin > 30 && tempoMin <= 120) {
  classificacao = "Média";
} else {
  classificacao = "Demorada";
}

console.log(classificacao);

// Alert final
alert(`Cliente: ${cliente}\nEndereço: ${endereco}\nTempo estimado: ${tempoMin.toFixed(2)} minutos\nClassificação: ${classificacao}`);
