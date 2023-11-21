let btnOrdenarPrecos = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPrecos .addEventListener('click', ordenarLivrosPorPreco)//evento clique, apos virgula chamar uma função

function ordenarLivrosPorPreco () {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco) //ordenar preços para melhorar a ordenação, colocar a e b, e comprar eles
    exibirOsLivrosNaTela(livrosOrdenados)
    
}