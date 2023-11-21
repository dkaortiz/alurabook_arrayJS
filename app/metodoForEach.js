const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValortotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')


function exibirOsLivrosNaTela(listasDeLivros) {
  elementoComValortotalDeLivrosDisponiveis.innerHTML = '' //zerar esse elemento e exibir nada valor vazio
  elementoParaInserirLivros.innerHTML = '' //sempre o valor vazio, antes de inserir os dados

  
    listasDeLivros.forEach(livro => {
     // let disponibilidade = verificarDiposnibilidadeDoLivro(livro)
     let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel' //if tradicional em baixo OPERADOR TERNARIO
      
        elementoParaInserirLivros.innerHTML +=`
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
    })
    
}
// function verificarDiposnibilidadeDoLivro (livro) {
//   if(livro.quantidade > 0 ){
//     return 'livro__imagens'
//   }
//   else{
//     return 'livro__imagens indisponivel'
//   }
  
// }