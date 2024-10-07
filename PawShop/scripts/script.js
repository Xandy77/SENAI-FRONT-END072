var catalogo = []
var carrinho = []
var valorTotal = 0
var id = 0;

// constructor
class Produto {
    constructor(id, imgSrc, titulo, desc, valor) {
        this.id = id
        this.imgSrc = imgSrc
        this.titulo = titulo
        this.desc = desc
        this.valor = valor
    }
}

catalogo.push(new Produto(0, '../images/images/products/productImage.png', 'Coleira', 'A coleira é o acessório essencial para manter o seu companheiro de quatro patas seguro e com estilo. Feita com materiais de alta qualidade, nossa coleira é resistente e confortável para o seu cão.', 100))
catalogo.push(new Produto(1, '../images/images/products/productImage2.png', 'Comida', 'Ofereça ao seu cão a nutrição de que ele precisa com a nossa seleção de alimentos premium. Nossas opções de comida são formuladas com ingredientes de alta qualidade.', 80))
catalogo.push(new Produto(2, '../images/images/products/productImage3.png', 'Disco de Brinquedo', 'Mantenha seu cão entretido e ativo com nosso disco de brinquedo, projetado para horas de diversão ao ar livre. Feito de materiais seguros e duráveis.', 20))
catalogo.push(new Produto(3, '../images/images/products/productImage4.png', 'Casinha', 'Nossa casinha para cães é um verdadeiro lar dentro de casa. Feita com materiais duráveis e resistentes às intempéries, ela oferece um refúgio seguro e aconchegante.', 250))


function mostrarCatalogo() {
    catalogo.forEach(cadaProduto => {
        document.getElementById("catalogo").innerHTML += `                
            <div class="card p-2 text-center" style="width: 20rem; border-radius: 0%;">
                <img style="border-radius: 0%;" src="${cadaProduto.imgSrc}" class="card-img-top" alt="">
                <div class="card-body">
                    <h4 class="card-title" style="color: var(--laranja);">${cadaProduto.titulo}</h4>
                    <p class="card-text">${cadaProduto.desc}</p>
                    <h5 class="card-title" style="color: var(--verde);">${cadaProduto.valor}</h5>
                        <button onclick="adicionarAoCarrinho('${cadaProduto.titulo}',${cadaProduto.valor})" type="button" class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#carrinho">
                            COMPRAR
                        </button>
                </div>
            </div>
       `
    });
}

mostrarCatalogo()


// CARRINHO

function adicionarAoCarrinho(nomeProduto, valorProduto){
    document.getElementById('carrinhoLista').innerHTML = ``
    carrinho.push([nomeProduto, valorProduto])

    carrinho.forEach(cadaProduto => {
        document.getElementById('carrinhoLista').innerHTML += `
            
            <div class="container-fluid d-flex justify-content-between">
                <h4> ${cadaProduto[0]} </h4>
                <h4> R$ ${cadaProduto[1]} </h4>
            </div>
        `
    });
        
    valorTotal = valorTotal + valorProduto
    document.getElementById('valorTotal').innerHTML = `
        R$ ${valorTotal}
    `
}

document.getElementById('tipoPagamento').addEventListener('change', function() {
    const infoCartao = document.getElementById('infoCartao');
    if (this.value === 'cartao') {
        infoCartao.style.display = 'block';
    } else {
        infoCartao.style.display = 'none';
    }
});

document.getElementById('formPagamento').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const cpf = document.getElementById('cpf').value;
    const tipoPagamento = document.getElementById('tipoPagamento').value;
    const numeroCartao = document.getElementById('numeroCartao').value;

    // Aqui você pode processar o pagamento, por exemplo, fazer uma chamada AJAX para seu servidor.

    alert(`Pagamento realizado com sucesso! 
    Nome: ${nome}, 
    Endereço: ${endereco}, 
    CPF: ${cpf}, 
    Tipo de Pagamento: ${tipoPagamento}`);
    
    // Reinicializa o formulário
    this.reset();
    // Fecha o modal
    var pagamentoModal = bootstrap.Modal.getInstance(document.getElementById('pagamentoModal'));
    pagamentoModal.hide();
});

