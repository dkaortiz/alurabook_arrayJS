let livros = [] /*Variavel Livro */
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json' //Cosntante para buscar listas de livros
getBuscarLivrosDaAPI() //função



async function getBuscarLivrosDaAPI() {
    const res = await fetch (endpointDaAPI) //esperar uma promessa de receber todas as listas await - realizar requisição endpoint
    livros = await res.json() //requisição armazenar na variavel livro
    console.table(livros) //em vez de ver log em linhas, visualizar em tabelas
    exibirOsLivrosNaTela(livros)
}



