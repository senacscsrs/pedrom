/* 1.	Declare três variáveis: uma string com o seu nome, um number com a
 sua idade e um boolean que diga se você gosta de programação. Use console.log() para mostrar todas juntas. */    

let nome = "Pedro Henrique Bavaresco Machado";
let idade = 15;
let programacao = true;
let aprendizado = "";

while (aprendizado == "") {
  if (programacao) {
    aprendizado = "programação";
  } else {
    aprendizado = "aprendizado";
  }
}

console.log(`Meu nome é ${nome}, tenho ${idade} anos e estou aprendendo ${aprendizado}`);
