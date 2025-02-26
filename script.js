document.addEventListener('DOMContentLoaded', function(){
    const aumentaFontBotao = document.getElementById('aumentar-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
});