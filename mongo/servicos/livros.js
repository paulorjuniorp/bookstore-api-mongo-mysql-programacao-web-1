import livros from "../models/Livros.js";
import { autor } from "../models/Autores.js";

async function getTodosLivros() {
    const listaLivros = await livros.find({});
    return listaLivros;
}

async function getLivroPorId(id) {
    const listaLivros = await livros.findById(id);
    return listaLivros;
}

async function listarLivrosPorEditora(editora) {
    return await livros.find({ editora: editora });
}

async function insereLivro(livroNovo) {
    
    await livros.create(livroNovo);
}

async function modificaLivro(modificacoes, id) {
    await livros.findByIdAndUpdate(id, modificacoes);
}

async function removeLivro(id) {
    await livros.findByIdAndDelete(id);
}


export {
    getTodosLivros,
    getLivroPorId,
    listarLivrosPorEditora,
    insereLivro,
    modificaLivro,
    removeLivro
}