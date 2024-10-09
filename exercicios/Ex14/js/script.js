// Faça um algoritmo que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e 
// unidades do mesmo. Observando os termos no plural a colocação do "e", da vírgula entre outros.
// Exemplo: 326: 3 centenas, 2 dezenas e 6 unidades

function gerarTabuada() {
    let numero = document.querySelector('#numero').value;

    if (isNaN(numero) == true || numero == "") {
        alert("Número Inválido!");
        document.querySelector('#numero').value = "";
    } else {
        let msgTabuada = "";
        for (let i = 1; i <= 10; i++) {
            msgTabuada += `${numero} X ${i} = ${numero * i} <br>`;
        }
        document.querySelector('h5').innerHTML = msgTabuada;
        document.querySelector('#numero').disabled = true;
        document.querySelector('.btn-primary').disabled = true;
        document.querySelector('.btn-dark').disabled = false;
    }


}
function liberarTabuada() {
    let podeGerar = confirm("Deseja gerar outra tabuada?");

    if (podeGerar == true) {
        document.querySelector('#numero').disabled = false;
        document.querySelector('.btn-primary').disabled = false;
        document.querySelector('.btn-dark').disabled = true;
    }
}
document
    .querySelector('.btn-primary')
    .addEventListener('click', gerarTabuada);

document
    .querySelector('.btn-dark')
    .addEventListener('click', liberarTabuada);