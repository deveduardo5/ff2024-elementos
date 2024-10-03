// Faça um algoritmo que pergunte em que turno o usuário estuda. 
// Peça para digitar M- matutino, V- Vespertino ou N- Noturno. 
// Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso digitado.

function exibirCumprimento() {
    let turno = document.querySelector('#turno').value;

    switch (turno) {
        case "M":
            document.querySelector('section>h2').innerHTML="Bom dia!"
            break;
        case "V":
            document.querySelector('section>h2').innerHTML="Boa tarde!"
            break;
        case "N":
            document.querySelector('section>h2').innerHTML="Boa noite!"
            break;
        default:
            document.querySelector('section>h2').innerHTML="Opção Inválida"
            break;
    }
}

document
    .querySelector('.btn')
    .addEventListener('click',exibirCumprimento);