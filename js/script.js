// O Sr. Manoel Joaquim acaba de adquirir uma panificadora e pretende implantar a metodologia 
// da tabelinha. Você foi contratado para desenvolver o programa que monta a tabela de preços 
// de pães, de 1 até 50 pães, a partir do preço do pão informado pelo usuário, conforme o 
// exemplo abaixo:
// Preço do pão: R$ 0,25 unid. 
//  1 = R$ 0,25
//  2 = R$ 0,50 
// ...
// 50 = R$ 12,50

function gerarTabuada() {
    let numero = document.querySelector('#numero').value;
    if (isNaN(numero) == true || numero == "") {
        alert("Número Inválido!");
        document.querySelector('#numero').value = "";
    } else {
        let msgTabuada = "";
        for (let i = 1; i <= 10; i++) 
            msgTabuada += `${numero} X ${i} = ${numero * i} <br>`;
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