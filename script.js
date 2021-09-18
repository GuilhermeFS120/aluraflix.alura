var JS_listaFilmes = [
];

function mostrarFilmes(HTML_filme) {
    var filme = `<img src="${HTML_filme}" class="imagensFilmes">`
    var HTML_listaFilmes = document.querySelector('#listaFilmes');
    if (JS_listaFilmes.includes(filme)) {
        console.error('O filme já existe.');
    } else {
        JS_listaFilmes.push(filme);
    };
    HTML_listaFilmes.innerHTML = JS_listaFilmes
};

function adicionarFilme() {
    var HTML_filme = document.querySelector('#filme').value;
    if (HTML_filme.endsWith('.jpg')) {
        mostrarFilmes(HTML_filme);
    } else {
        console.error('Endereço de imagem inválido!');
    };
    document.querySelector('#filme').value = '';
};