import {autor} from "../models/Autores.js";

async function getTodosAutores() {
    const listaAutores = await autor.find({});
    return listaAutores;
}

async function getAutorPorId(id) {
    const listaAutores = await autor.findById(id);
    return listaAutores;
}

async function insereAutor(autorNovo) {
    await autor.create(autorNovo);
}

async function modificaAutor(modificacoes, id) {
    await autor.findByIdAndUpdate(id, modificacoes);
}

async function removeAutor(id) {
    await autor.findByIdAndDelete(id);
}


export {
    getTodosAutores,
    getAutorPorId,
    insereAutor,
    modificaAutor,
    removeAutor
}