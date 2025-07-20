import { getTodosFavoritos, getFavoritoPorId, insereFavorito, removeFavorito } from "../servicos/favoritos.js";

async function getFavoritos(req, res) {
    try{
        const favoritos = await getTodosFavoritos();
        res.send(favoritos);
    } catch(error) {
        res.status(500);
        res.send(error.message)
    }
}

async function getFavorito(req, res) {
    try{
        const id = req.params.id

        if(id) {
            const favorito = await getFavoritoPorId(id);
            res.send(favorito);
        }
    } catch(error) {
        res.status(422);
        res.send("Id inválido")
    }
}

async function postFavorito(req, res) {
    try {
        const id = req.params.id
        if (id) {
            await insereFavorito(id)
            res.status(201)
            res.send("favorito inserido com sucesso!")
        }
    } catch(error) {
        res.status(500);
        res.send(error.message)
    }
}


async function deleteFavorito(req, res) {
    try {
        const id = req.params.id;
        if(id) {
            await removeFavorito(id);
            res.status(200);
            res.send("Favorito removido com sucesso!");
        }
    } catch(error) {
        res.status(500);
        res.send("Id inválido");
    }
}

export {
    getFavoritos,
    getFavorito,
    postFavorito,
    deleteFavorito
}