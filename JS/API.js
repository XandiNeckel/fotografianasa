const date = $('#date');
const apiKey = 'wTdSXpJVQF0U208334axP1hunACeVUwdmGajai9L'

$('#btn').click(function(){
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date.val()}`,
        method: 'GET',

        success: function(resposta){
            $('#resp').html(function(){
                if (resposta.media_type === 'image'){
                    return `<img class='imagem' src='${resposta.url}'/>`
                }else{
                    return `<iframe class='video' src="${resposta.url}" frameborder="20px"></iframe>`
                }
            })
        },
       error: function(erro){
           console.error(erro)
       }
    })
})

$('form').submit(function(event){
    event.preventDefault()
})
