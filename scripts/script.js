'use script';

const calcular = function (number1, number2) {
    number1 = parseFloat(document.getElementById('number1').value);
    number2 = parseFloat(document.getElementById('number2').value);
    selector = document.getElementById('selector').value;

    switch (selector) {
        case '+':
            calculo = (number1 + number2);
            document.getElementById('result-box').innerHTML = `O valor da soma é igual à ${calculo}`;
            break;
        case '-':
            calculo = (number1 - number2);
            document.getElementById('result-box').innerHTML = `O resultado da subtração é igual à ${calculo}`;
            break;
        case '/':
            calculo = Math.round((number1 / number2));
            if(Number.isNaN(calculo)) {
                document.getElementById('result-box').innerHTML = `Insira um divisível válido`;
            } else {
                document.getElementById('result-box').innerHTML = `O resultado da divisão é igual à ${calculo}`;
        }  
            break;
        case '*':
            calculo = (number1 * number2);
            document.getElementById('result-box').innerHTML = `O resultado da multiplicação é igual à ${calculo}`;
            break;
    }
}


const myFunction = function () {
    const element = document.body;

    element.classList.toggle('dark-mode');
}