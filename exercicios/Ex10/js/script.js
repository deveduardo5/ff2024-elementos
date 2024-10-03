// Faça um algoritmo que o usuário escreva o nome e o preço de três produtos e assim que terminar de escrever o ultimo
// produto, mostre o nome e o valor do produto mais barato.

function verificarBarato() {
    let nome = document.querySelector('#nome').value;
    let valor = parseFloat(document.querySelector('#valor').value);
    let nome1 = document.querySelector('#nome1').value;
    let valor1 = parseFloat(document.querySelector('#valor1').value);
    let nome2 = document.querySelector('#nome2').value;
    let valor2 = parseFloat(document.querySelector('#valor2').value);
    
    let resultado = "";

    let menor = Math.min(nome, nome1, nome2, valor, valor1, valor2);

    if ((valor <= valor1) && (valor <= valor1))
        resultado = ` ${nome}, custa R$ ${valor} é o menor valor!`
    else if ((valor1 <= valor) && (valor1 <= valor2))
        resultado = `  ${nome1}, custa R$ ${valor1} é o menor valor!`
    else
        resultado = `${nome2}, custa R$ ${valor2} é menor valor!`

    document.querySelector("#resultado").innerHTML = resultado;
}

document
    .querySelector('.btn')
    .addEventListener('click',verificarBarato);