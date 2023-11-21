function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livros ) => acc + livros.preco, 0).toFixed(2) // duas casas deciais toFixed
    
}