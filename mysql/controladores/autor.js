const { getTodosAutores, getAutorPorId, insereAutor, modificaAutor, removeAutor } = require("../servicos/autores");

async function getAutores(req, res) {
    try{
        const autores = await getTodosAutores();
        res.send(autores);
    } catch(error) {
        res.status(500);
        res.send(error.message)
    }
}

async function getAutor(req, res) {
    try{
        const id = req.params.id

        if(id && Number(id)) {
            const autor = await getAutorPorId(id);
            if (!autor) {
                return res.status(404).send("Autor não encontrado");
            }
            res.send(autor);
        }
    } catch(error) {
        res.status(422);
        res.send("Id inválido")
    }
}

async function postAutor(req, res) {
    try {
        const autorNovo = req.body
        if (req.body.nome) {
            const autorCriado = await insereAutor(autorNovo)
            res.status(201).send(autorCriado);
        }
    } catch(error) {
        res.status(500);
        res.send("O campo nome é obrigatório!")
    }
}

async function patchAutor(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)) {
            const body = req.body
            await modificaAutor(body, id)
            res.status(201)
            res.send("Autor editado com sucesso!")
        }
    } catch(error) {
        res.status(500)
        res.send("Id inválido")
    }
}

async function deleteAutor(req, res) {
    try {
        const id = req.params.id;
        if(id && Number(id)) {
            await removeAutor(id);
            res.status(200);
            res.send("Autor removido com sucesso!");
        }
    } catch(error) {
        res.status(500);
        res.send("Id inválido");
    }
}

module.exports = {
    getAutores,
    getAutor,
    postAutor,
    patchAutor,
    deleteAutor
}