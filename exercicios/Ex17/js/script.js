/*
Desenvolva um gerador de tabuada, capaz de gerar através de qualquer número inteiro, 
solicitando ao usuário o número e mostrando na tela conforme o exemplo abaixo:
Tabuada de 5:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50 
*/
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