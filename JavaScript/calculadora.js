function calcularDoisNumeros(operacao) {

    let num1 = Number( document.getElementById('num1').value)
    let num2 = Number( document.getElementById('num2').value)

    let resposta


    switch (operacao) {
        case "*": resposta = num1 * num2
            break

        case "/": resposta = num1 / num2
            break

        case "+": resposta = num1 + num2
            break

        case "-": resposta = num1 - num2
            break
    }
    
    document.getElementById("resultado").innerHTML = resposta
}

