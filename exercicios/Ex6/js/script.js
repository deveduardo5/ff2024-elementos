// Faça um algoritmo que leia três números e mostre o maior deles.

function exibirMaior() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let num3 = parseFloat(document.querySelector("#num3").value);
    let resultado = "";

    if ((num1 >= num2) && (num1 >= num3))
        resultado = `${num1} é maior!`;
    else if ((num2 >= num1) && (num2 >= num3))
        resultado = `${num2} é maior!`;
    else
        resultado = `${num3} é maior!`;
    document.querySelector("#resultado").innerHTML = resultado;
}
document
    .querySelector(".btn")
    .addEventListener("click", exibirMaior);
