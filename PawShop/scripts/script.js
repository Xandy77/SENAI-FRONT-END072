var catalogo = []
var carrinho = []
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

catalogo.push(new Produto(0, '#', 'Coleira', 'lorem', 100))

function mostrarCatalogo() {
    catalogo.forEach(cadaProduto => {
        document.getElementById("catalogo").innerHTML += `                
            <div class="card p-2 text-center" style="width: 20rem; border-radius: 0%;">
                <img style="border-radius: 0%;" src="${cadaProduto.imgSrc}" class="card-img-top" alt="">
                <div class="card-body">
                    <h4 class="card-title" style="color: var(--laranja);">${cadaProduto.titulo}</h4>
                    <p class="card-text">${cadaProduto.desc}</p>
                    <h5 class="card-title" style="color: var(--verde);">${cadaProduto.valor}</h5>
                        <button type="button" class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#carrinho">
                            COMPRAR
                        </button>
                </div>
            </div>
        `



    });

}

mostrarCatalogo()