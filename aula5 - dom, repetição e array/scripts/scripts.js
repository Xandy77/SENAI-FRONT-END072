function teste(){
    // document = refere-se ao documento html
    // getElement = buscar um elemento (id,class, tag)
    // .value = buscar o valor dentro do input
    var inputTeste = document.getElementById("inputTeste").value


    // .innerHtml = colocar algo dentro do elemento com tags
    // .innerText = colocar algo dentro do elemento com texto
    document.getElementById("resposta").innerHTML += `
        <div class="elementos">
           ${inputTeste}
        </div>
    `
}

function repeticao(){
    // enquanto(condição) faca fimEnquanto
    // chamando a condição = ()
    // contador = contador + 1 é o mesmo que contador++ 
    let contador = 0    
        while(contador <= 10){
        document.getElementById("resposta2").innerHTML += "*"
        contador++
    }

    //o "i" é equivalente ao contador 
    for(let i = 0; i <= 10; i++){
        document.getElementById("resposta2").innerHTML += i
    }
}

    // quando usamos [] estamos chamando o array
function lista(){
    // var arrayComen = Array()
    // arrayComen[0] = "info"

    var livros = [true, "string", 100, []]
    
    var listaProdutos = ['Gib','Mangá','Livros', 'Revistas', 'Apostilas']
    console.log(listaProdutos)

    listaProdutos.forEach(produto => {
    document.getElementById("resposta3").innerHTML += `
        <div class ="elementos">
            <h2> ${produto}</h2>
        </div>    
    `
    });
}


