import fs from "fs";

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"));
}

function getFavoritoPorId(id) {
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));
    const favoritosFiltrado = favoritos.filter(favorito => favorito.id === id)[0];

    return favoritosFiltrado;
}

function insereFavorito(id) {
    const livros = JSON.parse( fs.readFileSync("livros.json") )
    const favoritos = JSON.parse( fs.readFileSync("favoritos.json") )
    
    const livroInserido = livros.find( livro => livro.id === id)
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))
}


function removeFavorito(id) {
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));
    const favoritosFiltrados = favoritos.filter(favorito => favorito.id !== id);

    fs.writeFileSync("favoritos.json", JSON.stringify(favoritosFiltrados));
}


export {
    getTodosFavoritos,
    getFavoritoPorId,
    insereFavorito,
    removeFavorito
}