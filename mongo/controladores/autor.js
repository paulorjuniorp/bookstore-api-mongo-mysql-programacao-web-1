import { getTodosAutores, getAutorPorId, insereAutor, modificaAutor, removeAutor } from "../servicos/autores.js";

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
        if(id) {
            const autor = await getAutorPorId(id);
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
            await insereAutor(autorNovo)
            res.status(201)
            res.send("Autor inserido com sucesso!")
        }
    } catch(error) {
        res.status(500);
        res.send("O campo nome é obrigatório!")
    }
}

async function patchAutor(req, res) {
    try {
        const id = req.params.id

        if(id) {
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
        if(id) {
            await removeAutor(id);
            res.status(200);
            res.send("Autor removido com sucesso!");
        }
    } catch(error) {
        res.status(500);
        res.send("Id inválido");
    }
}

export {
    getAutores,
    getAutor,
    postAutor,
    patchAutor,
    deleteAutor
}