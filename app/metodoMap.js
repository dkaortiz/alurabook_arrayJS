function aplicarDesconto (livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} // tres ponto, uma copia nesse caso livro, so que o preço vai ser livro.preco - livro.preco* desconto variavel desconto 0.3
    })
    return livrosComDesconto
}