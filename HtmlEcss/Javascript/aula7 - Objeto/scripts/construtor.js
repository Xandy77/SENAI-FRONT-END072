var clientes = []

class Cliente{
    constructor(nome, cpf, nConta, email, credito){
        this.nome = nome;
        this.cpf = cpf;
        this.nConta = nConta;
        this.email = email;
        this.saldo = 0;
        this.credito = credito;
        this.fazerCompra = function(valor){}
        this.fazerCompra = function(valor, cliente){}
        this.fazerCompra = function(valor, cliente){}
        
    }

}

// clientes.push(new Cliente("Valdomiro","12345678910", "001", "Val@gmail.com", "1000"));
// clientes.push(new Cliente("Ellen","12345678912", "002", "Ellen@gmail.com", "2000"));
// console.log(clientes)

function mostrarClientes(){
    document.querySelector("#lista").innerHTML = ``
    clientes.forEach(cadaCliente => {
        document.querySelector("#lista").innerHTML += `
        
        <div class="cliente">
            <p> ${cadaCliente.nome} </p>
            <p> ${cadaCliente.cpf} </p>
            <p> ${cadaCliente.email} </p>
        </div>
        `
    });
}

function cadastrarCliente(){
    // entrada
    let nome = document.querySelector("#nome").value
    let cpf = document.querySelector("#cpf").value
    let nConta = document.querySelector("#nConta").value 
    let email= document.querySelector("#email").value 
    let credito = document.querySelector("#credito").value 

    // Processamento
    clientes.push(new Cliente(nome,cpf, nConta, email, credito));

    // saida
    mostrarClientes()
}

// vai lá no botão e adiciona um evento
document.querySelector("#cadastrar").addEventListener('click', cadastrarCliente)

