function calcularDois(num1, num2, operacao) {
    let resposta

    if (operacao === "*") {

        resposta = multiplicar(num1, num2)

    } else if (operacao === "/") {

        resposta = dividir(num1, num2)

    } else if (operacao === "+") {

        resposta = somar(num1, num2)

    } else if (operacao === "-") {

        resposta = subtrair(num1, num2)

    }


    document.getElementById("resultado").innerHTML = resposta
    console.log("funcionou")
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    return num1 / num2
}

function somar(num1, num2) {
    return num1 + num2
}

function subtrair(num1, num2) {
    return num1 - num2
}