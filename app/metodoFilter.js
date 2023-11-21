const botoes = document.querySelectorAll('.btn')//Todos os elemtos querySelectorAll .btn que tenha btn
botoes.forEach (btn => btn.addEventListener('click', filtrarLivros)) //pega um elemento e faz uma função, forEach, mas com cada botão 
//clique, que vai chamar a função filtrar livros,  pega todos os botões e faz filtrar livros

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id) // qual é o botão que esta sendo clicado 
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    //se a categoria for disponivel, voupegar o livro, fazer o filtro na quantidade maior que zero, senão vou fazer filtro com base em categoria
    
    exibirOsLivrosNaTela(livrosFiltrados)
    if(categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
    
}
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValortotalDeLivrosDisponiveis.innerHTML = /*innerHTML acessar conteudo desse elemento*/`
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
    
    `
    
}