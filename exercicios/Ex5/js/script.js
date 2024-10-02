// Faça um algoritmo que peça dois números e imprima o maior deles.

function exibirMaior() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);

    let resultado = "";
    if(num1 >= num2)
        resultado = `${num1} é maior!`;
    else
        resultado = `${num2} é maior!`;

    let h1 = document.querySelector("#resultado").innerHTML = resultado;
}
document
    .querySelector(".btn")
    .addEventListener("click",exibirMaior);