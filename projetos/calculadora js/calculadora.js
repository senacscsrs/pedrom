let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let media = Math.floor((nota1 + nota2) / 2);
let conceito;
switch (media) {
    case 10:
    case 9:
        conceito = "A";
        break
    case 8:
    case 7:
        conceito = "B";
        break
    case 6:
    case 5:
        conceito = "C";
        break
    case 4:
    case 3:
        conceito = "D";
        break
    case 2:
    case 1:
    case 0:
        conceito = "E";
        break;
    default:
        conceito = "Nota inválida";
}
alert("Média: " + media + "\nConceito: " + conceito);