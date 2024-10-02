// Faça um algoritmo que pergunte o nome do usuário, o quanto ganha por hora e o número de horas
// trabalhadas no mês. Calcule o resultado e mostre o nome e o total da renda recebida no mês.

function calcularResultado() {
    let nome = document.querySelector('#nome').value;
    let valoHora = parseFloat(document.querySelector('#valorHora').value);
    let quantHora = parseFloat(document.querySelector('#quantHora').value);

    let resultado = valoHora * quantHora;

    document.querySelector("#resultado").innerHTML =
        `O valor recebido do trabalhador ${nome} é R$ ${resultado.toFixed(2)}`;
}

document.querySelector('.btn').addEventListener('click',calcularResultado);