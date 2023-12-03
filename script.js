let pendentes = document.querySelector("#pendentes");
let inputText = document.querySelector("#inputText");
let adicionar = document.querySelector("#adicionarBtn");
let finalizadas = document.querySelector("#finalizadas");

adicionar.addEventListener("click", function(){
    add(inputText.value);
})

function add(text) {
    if (text !== '') {
        let lista = document.createElement('li');
        lista.textContent = text;

        let button = document.createElement('button');
        button.textContent = "FINALIZADA";

        button.addEventListener('click', function(){
            finalizar(lista);
        });

        lista.appendChild(button);

        pendentes.appendChild(lista);
    }
}

function finalizar(lista) {
    let botao = document.querySelector("button");
    pendentes.removeChild(lista);
    finalizadas.appendChild(lista);
    botao.parentNode.removeChild(botao);
}