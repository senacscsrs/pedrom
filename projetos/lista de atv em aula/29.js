// 29.	Crie um do/while que mostre um menu com três opções (simulado com uma variável) e só saia quando a opção for "sair".

let opção = "3";

do {
    console.log("Menu:\n1. Opção 1\n2. Opção 2\n3. Sair");
    console.log("Você escolheu a opção: " + opção);
} while (opção !== "3");