let cliente = "Cliente X";
let endereco = "Rua Dedão do Pé, 124";
let distanciaKm = 30;

let tempoHrs = distanciaKm / 40;
let tempoMin = tempoHrs * 60;

console.log(tempoMin);

if (tempoMin <= 30) {
  console.log("Rápida");
} else if (tempoMin > 30 && tempoMin <= 120) {
  console.log("Média");
} else {
  console.log("Demorada");
}
