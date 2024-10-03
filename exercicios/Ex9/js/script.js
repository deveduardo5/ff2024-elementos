// Faça um algoritmo em que valida se pode entrar na montanha russa ou não, os critérios são:
// 1. Ter 1,70 de altura.
// 2. Ter mínimo de 1,60 de altura e ser maior de 18 anos.

function verificarEntrada() {
    let altura = parseFloat(document.querySelector("#altura").value);
    let idade = parseInt(document.querySelector("#idade").value);

    let resultado = "";

    if (altura >= 1.70) {
        resultado = `Pode ir na montanha russa`;
    }
    else if((altura >= 1.60) && (idade >= 18)) {
        resultado = `Não pode entrar`;
    }

    document.querySelector("section>h2").innerHTML = resultado;
}
document
.querySelector('button')
.addEventListener("click", verificarEntrada);