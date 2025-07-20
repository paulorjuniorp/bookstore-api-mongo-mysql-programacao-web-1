import favoritos from "../models/Favoritos.js";
import { getLivroPorId } from "../servicos/livros.js"


async function getTodosFavoritos() {
    return await favoritos.find({});
}

async function getFavoritoPorId(id) {
    const favoritoPorId = await favoritos.find({livro_id: id});

    return favoritoPorId;
}

async function insereFavorito(id) {

    const livro = await getLivroPorId(id);
    const favoritoExistente = await favoritos.findOne({livro_id: id});

    if(!livro || favoritoExistente) {
        throw new Error('Livro já está nos favoritos ou não existe');
    }

    const favorito = await favoritos.create({
        livro_id: livro._id,
        nome: livro.nome
    })

    return favorito;
}

async function removeFavorito(id) {
    await favoritos.findByIdAndDelete(id);
}


export {
    getTodosFavoritos,
    getFavoritoPorId,
    insereFavorito,
    removeFavorito
}