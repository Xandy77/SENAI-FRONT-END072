var carros = [];

class Carro {
    constructor(marca, modelo, ano, cor, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }

    acelerar(valor) {
        this.velocidadeAtual += valor;
        if (this.velocidadeAtual > this.velocidadeMaxima) {
            this.velocidadeAtual = this.velocidadeMaxima;
        }
    }
}

function mostrarCarros() {
    document.querySelector("#lista").innerHTML = ``;
    carros.forEach(carro => {
        document.querySelector("#lista").innerHTML += `
        <div class="carro">
            <p>Marca: ${carro.marca}</p>
            <p>Modelo: ${carro.modelo}</p>
            <p>Ano: ${carro.ano}</p>
            <p>Cor: ${carro.cor}</p>
            <p>Velocidade Máxima: ${carro.velocidadeMaxima} km/h</p>
            <p>Velocidade Atual: ${carro.velocidadeAtual} km/h</p>
        </div>
        `;
    });
}

function cadastrarCarro() {
    // entrada
    let marca = document.querySelector("#marca").value;
    let modelo = document.querySelector("#modelo").value;
    let ano = parseInt(document.querySelector("#ano").value);
    let cor = document.querySelector("#cor").value;
    let velocidadeMaxima = parseInt(document.querySelector("#velocidadeMaxima").value);

    // Processamento
    let novoCarro = new Carro(marca, modelo, ano, cor, velocidadeMaxima);
    carros.push(novoCarro);

    // saída
    mostrarCarros();
}

// Adiciona evento ao botão
document.querySelector("#cadastrar").addEventListener('click', cadastrarCarro);