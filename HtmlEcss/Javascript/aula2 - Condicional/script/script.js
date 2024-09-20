function explicacao(){
    // se () senão fimSe
    if(true){
        console.log("ESTOU NO IF")

    }
    else{
        console.log("ESTOU NO ELSE")

    }

    let idade = Number(prompt("Qual é a sua idade?"))

    if(idade < 18){
        alert("Entrada não permitida")
        location.href = "http://www.google.com"
    }
    else{
        alert("Entrada permitida!")
        location.reload()
    
    }
}

function explicacao2(){
    const emailAdm = "adm@gmail.com"
    const senhaAdm = "123"

    alert("Seja bem vindo ao sistema Senai!")
    let email = prompt("Digite o email: ")
    let senha = prompt("Digite a senha: ")

    // "=" é atribuição
    // "==" comparação de conteúdo
    // "===" comparação de conteúdo e tipo
    // "!=" não igual (diferente)
    // "&" (equivalente ao "e")
    // || (equivalente ao "ou")
    if(email == emailAdm & senha == senhaAdm){
        alert("Você é o adm")

    }else{
        alert("Usuario ou senha incorretos! Tente Novamente!")

        let repete = confirm("Deseja tentar novamente?")

        if(repete){
            explicacao2()

        }

       
    }
}

    function explicacao3(){
    alert("Seja bem vindo a Lojinha")
    let opcao = prompt("A) Camisa, B) Calça C) Sapato")

    switch(opcao){
        case "A":
            alert("Voce escolheu Camisa")
            vTotal = 100
            break
        case "B":
            alert("Voce escolheu Calça")
            break
        case "C":
            alert("Voce escolheu Sapato")
            break
        default:
            alert("Opção Inválida!")

            let repete = confirm("Deseja tentar novamente?")

            if(repete){
                explicacao3()
            }
        
        
    }

}

function faixaEtaria() {
    let idade = Number(prompt("Qual é a sua idade?"));

    if (idade >= 0 & idade < 15) {
        alert("Criança")
    } else {
        if (idade >= 15 & idade < 30) {
            alert("Jovem")
        } else if (idade >= 30 & idade < 60) {
            alert("Adulto")
        } else if (idade >= 60) {
            alert("Idoso")
        } else {
            alert("Idade inválida")
        }
                

    }
}

function calcular(op) {
    let n1 = Number(prompt("Digite o primeiro numero"))
    let n2 = Number(prompt("Digite o segundo numero"))
    let resultado

    switch (op) {
        case '+':
            resultado = n1 + n2
            break
        case '-':
            resultado = n1 - n2
            break
        case '*':
            resultado = n1 * n2
            break
        case '/':
            resultado = n1 / n2 
            break

        }
        alert("Resultado: " + resultado)

    }

    