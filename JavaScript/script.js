function calcular(num1, num2, operacao){
    let resposta 
    if (operacao === "*"){
        resposta = multiplicar(num1, num2)
    }else if(operacao === "/"){
        resposta = divisao(num1,num2)
    }else if(operacao === "+"){
        resposta = adicao(num1,num2)
    }else if(operacao === "-"){
        resposta = subtracao(num1,num2)
    }


    document.getElementById("resultado").innerHTML = resposta
} 

function multiplicar(num1, num2){
    return num1 * num2
}

function divisao(num1, num2){
    return num1 / num2
}

function adicao(num1, num2){
    return num1 + num2
}

function subtracao(num1, num2){
    return num1 - num2
}