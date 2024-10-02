// Faça um algoritmo que leia três números e mostre o maior e o menor deles.

function exibirMaior() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let num3 = parseFloat(document.querySelector("#num3").value);
    let resultado = "";

    let menor = Math.min(num1, num2, num3);
    let maior = Math.max(num1, num2, num3);

    resultado = `${maior} é maior! <br/>`;
    resultado += `${menor} é menor!`;

    document.querySelector("#resultado").innerHTML = resultado;
}
document
    .querySelector(".btn")
    .addEventListener("click", exibirMaior);
