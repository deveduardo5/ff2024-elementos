// Faça um algoritmo que pergunte em que turno o usuário estuda. 
// Peça para digitar M- matutino, V- Vespertino ou N- Noturno. 
// Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso digitado.

function calcularResultado() {
    let nome = document.querySelector('#nome').value;
    let valoHora = parseFloat(document.querySelector('#valorHora').value);
    let quantHora = parseFloat(document.querySelector('#quantHora').value);

    let resultado = valoHora * quantHora;

    document.querySelector("#resultado").innerHTML =
        `O valor recebido do trabalhador ${nome} é R$ ${resultado.toFixed(2)}`;
}

document.querySelector('.btn').addEventListener('click',calcularResultado);