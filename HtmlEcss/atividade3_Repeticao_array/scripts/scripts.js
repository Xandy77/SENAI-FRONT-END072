let listaFilmes = [];

function adicionarFilme() {
    const filme = document.getElementById("inputTeste").value;
    if (filme) {
        listaFilmes.push(filme);
        document.getElementById("inputTeste").value = ''; // Limpa o campo de entrada
        listarFilmes();
    }
}

function listarFilmes() {
    document.getElementById("filmes").innerHTML = '';
    listaFilmes.forEach(filme => {
        document.getElementById("filmes").innerHTML += `
            <div class="elementos">
                <h2>${filme}</h2>
            </div>
        `;
    });
}

function gerarTabuada() {
    const numero = Number(document.getElementById("inputNumero").value);
    
    // Verifica se o número não é um NaN e gera a tabuada
    if (isNaN(numero)) {
        document.getElementById("tabuadaResultado").innerHTML = 'Por favor, insira um número válido.';
        return; // Sai da função se não for válido
    }

    document.getElementById("tabuadaResultado").innerHTML = Array.from({ length: 10 }, (_, i) => 
        `${numero} x ${i + 1} = ${numero * (i + 1)}`
    ).join('<br>');
}