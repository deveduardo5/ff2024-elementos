
/*Faça um algoritmo que leia um nome de usuário e a sua senha. 
A senha não pode ser igual ao nome do usuário, 
mostrando uma mensagem de erro e voltando a pedir as informações. 
*/

function verificarLogin() {
    let login = document.querySelector('#login').value;
    let senha = document.querySelector('#senha').value;

    if (login === senha) {
        alert("A senha não deve ser igual ao login!");
        document.querySelector('body').style = "background-color: red;";
        //document.querySelector('body').style.backgroundColor = "red";
        document.querySelector('#login').value = "";
        document.querySelector('#senha').value = "";

    }
    else{
        alert("Logado com sucesso!");
    }

}
document.querySelector('button')
    .addEventListener('click', verificarLogin)
