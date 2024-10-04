$('#teste1').on('click', function(){
    $("caixa").animate({width: "100px", height: "100px"})
})

$('#teste2').on('click', function(){
    $('#caixa').animate({borderRadius : "100%"}).animate({width : "300px"})
})


$('#teste3').on('click', function(){
    // {primeira chave : css}, {segunda cahave: configuração da animação}
    $('#caixa').animate({rotate: "360deg"}, {duration : 1000, complete : () => {alert("RODEI"); $('#caixa').css('rotate', '0deg')} })
})

$('#teste4').on('click',function(){
    let teste = ['item1', 'item2', 'item3']
    // console.log(teste.indexOf('legal'))
    console.log(teste.includes('item2'))

    // no lugar do ('item1') poderiamos estar colocando "inputPesquisa"
    if(teste.indexOf('item1') == -1){
        alert('Não encontrei')
    }else{
        alert('Encontrei')
    }
})
    