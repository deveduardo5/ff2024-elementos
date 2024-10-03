// Faça um algoritmo para montar uma calculadora simples, onde o usuário vai optar em escolher conforme o menu 
// adiante. 
// Observação: no caso de divisão, o denominador não pode ser zero, invalidando a operação.
// 1. Soma.
// 2. Subtração.
// 3. Multiplicação.
// 4. Divisão
// 5. Potenciação
// 6. Radiciação

function exibirResultado() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let operacao = document.querySelector('select').value;

    switch (operacao) {
        case "1":
            document.querySelector('#resultado').innerHTML = ` A soma é ${num1 + num2}`;
            break;
        case "2":
            document.querySelector('#resultado').innerHTML = ` A subtração é ${num1 - num2}`;
            break;
        case "3":
            document.querySelector('#resultado').innerHTML = ` A multiplicação é ${num1 * num2}`;
            break;
        case "4":
            document.querySelector('#resultado').innerHTML = ` A divisão é ${num1 / num2}`;
            break;
        case "5":
            document.querySelector('#resultado').innerHTML = `A potenciação é ${num1 ** num2}`;
            break;
        case "6":
            document.querySelector('#resultado').innerHTML = ` A radiciação é ${num1 ** (1/num2)}`;
            break;
    }
}

document
    .querySelector('.btn')
    .addEventListener('click',exibirResultado);