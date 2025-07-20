const { getTodosFavoritos, getFavoritoPorId, insereFavorito, removeFavorito } = require("../servicos/favoritos");

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

        if(id && Number(id)) {
            const favorito = await getFavoritoPorId(id);
            if(!livro) {
                return res.status(404).send("Favorito não encontrado");
            }
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
        if (id && Number(id)) {
            const favoritoCriado = await insereFavorito(id)
            res.status(201).send(favoritoCriado);
        }
    } catch(error) {
        res.status(500);
        res.send(error.message)
    }
}


async function deleteFavorito(req, res) {
    try {
        const id = req.params.id;
        if(id && Number(id)) {
            await removeFavorito(id);
            res.status(200);
            res.send("Favorito removido com sucesso!");
        }
    } catch(error) {
        res.status(500);
        res.send("Id inválido");
    }
}

module.exports = {
    getFavoritos,
    getFavorito,
    postFavorito,
    deleteFavorito
}