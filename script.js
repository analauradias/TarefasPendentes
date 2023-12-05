let pendentes = document.querySelector("#pendentes");
let inputText = document.querySelector("#inputText");
let adicionar = document.querySelector("#adicionarBtn");
let finalizadas = document.querySelector("#finalizadas");

adicionar.addEventListener("click", function(){
    add(inputText.value);
    limpar(inputText);
})

function add(text) {
    if (text !== '') {
        let lista = document.createElement('li');
        lista.textContent = text;
        
        let button = document.createElement('button');
        button.textContent = "FINALIZADA";

        button.addEventListener('click', function(){
            finalizar(lista, button);
        });

        lista.appendChild(button);

        pendentes.appendChild(lista);
    }
}

inputText.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        add(inputText.value);
        limpar(inputText);
    }
});
function limpar(inputText) {
    inputText.value = '';
}
function finalizar(lista, botao) {
    let removeBotao = lista.removeChild(botao);
    let clone = lista.cloneNode(true);
    lista.remove();
    finalizadas.appendChild(clone);
}