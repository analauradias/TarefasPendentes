let texto = document.querySelector("#descricao");
let adicionar = document.querySelector("#adicionar");
let tarefas = document.querySelector("#tarefas");
let finalizadas = document.querySelector("#finalizadas");

adicionar.addEventListener("click", function () {
    add(descricao.value);
});


function add(texto) {
    if(texto != ''){
        tarefas.innerHTML += '<li>' + texto + '-' + '<a href="#" id="finalizar" onclick(tirar)>FEITA</a>' + '</li>';
    }
}

function tirar() {
    alert(`fds`);
}