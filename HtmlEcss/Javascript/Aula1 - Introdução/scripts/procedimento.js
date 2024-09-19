function procedimento(){
    let nome = prompt("Seja bem vindo(a), qual o seu nome?")
    // alert(nome+"Coloque o primeiro número a ser somado: ")
    let n1 = Number(prompt(`${nome} coloque o primeiro numero a ser somado`)) // prompt só recebe string(texto)
    let n2 = parseInt(prompt(`${nome} coloque o segundo numero a ser somado`))

    // Number(), parseInt(), parseFloat() - converte string
    let resultado = n1 + n2

    alert(`A soma dos números é de ${resultado}`)
} 

function exercicio1(){
    let numeroClientes = prompt("Quantos clientes estão na mesa?");
    let valorTotal = parseFloat(prompt("Qual é o valor total da conta?"));
    
    let valorPorCliente = valorTotal / numeroClientes;
    alert(`Cada cliente deve pagar: R$ ${valorPorCliente.toFixed(2)}`);
    
        
}

function exercicio2(){
    let numero = parseInt(prompt("Digite um número:"));

    let antecessor = numero - 1;
    let sucessor = numero + 1;

    alert(`Antecessor: ${antecessor}\nNúmero: ${numero}\nSucessor: ${sucessor}`);
    
    
}