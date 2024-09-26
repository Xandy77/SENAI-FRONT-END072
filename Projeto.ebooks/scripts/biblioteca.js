var livros = [
    ['../images/livros/harry potter.jpg','Harry Potter', 'A narrativa que inicia a saga Harry Potter conta a história de um menino bruxo que fica órfão, depois que o vilão Voldemort assassina seus pais a sangue frio. O garoto se torna uma lenda no mundo mágico por ter sobrevivido ao feitiço mortal apenas com uma cicatriz na testa, mesmo sendo apenas um bebê.'],
    ['../images/livros/girlRed.jpg','Girl Red', 'Baseado na história real de Hannie Schaft, uma garota comum que, em tempos sombrios, tornou-se heroína da Resistência. Uma narrativa fascinante sobre a coragem necessária para defender o que é certo - Judy Batalion, autora de A luz dos dias.'],
    ['../images/livros/percy4.jpg','Pijama Listrado', '']
]

function atualizarBiblioteca(){
    document.querySelector("#bibliotecaLivros").innerHTML = ``
    livros.forEach(cadaLivro => {
        document.querySelector("#bibliotecaLivros").innerHTML += `
           <div class="books">
                <img src="${cadaLivro[0]}" alt="" class="booksImg">
                <div class="booksDesc">
                    <h2 class="booksName">${cadaLivro[1]}</h2>
                        <p class="booksSinopse">
                            ${cadaLivro[2]}
                        </p>
                </div>
            </div>
        `
    });

}

function manipularLivros(){
    // adiciona ultimo elemento
    livros.push(["#", "Game Of Thrones", "lorem"])
    // adiciona o primeiro
    livros.unshift(["#", "Independece Day", "Lorem"])
    // deleta ultimo
    livros.pop()
    // deleta primeiro
    livros.shift()
    // splice com terceiro atributo - substitui o valor 
    livros.splice(1,1,["#","Independece Day","Lorem"])

    // splice com terceiro, 0 no delete - adicionamos um valor 
    livros.splice(1,0,["#","Vingadores","Lorem"])

    // splice sem terceiro atributo - deletamos o valor 
    livros.splice(2,1)
}

manipularLivros()
atualizarBiblioteca()