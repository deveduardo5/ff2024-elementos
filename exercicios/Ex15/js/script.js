// Faça um algoritmo que leia um nome de usuário e a sua senha. A senha não pode ser igual ao
// nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

function verificarAutenticacao() {
    let login = document.querySelector('#login').value;
    let senha = document.querySelector('#senha').value;

    if (login === senha) {
        alert("Digite Novamente a Senha!");
        document.querySelector('body').style = "backgroundColor = red;";
        //document.querySelector('body').style.backgroundColor = "red";
        document.querySelector('#login').value = "";
        document.querySelector('#senha').value = "";
    }
    else{
        alert("Logado com sucesso!")
    }

}

document
    .querySelector('.btn')
    .addEventListener('click', verificarAutenticacao);