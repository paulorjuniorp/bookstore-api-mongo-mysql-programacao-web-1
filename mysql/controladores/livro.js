const { getTodosLivros, listarLivrosPorNomeAutor, getLivroPorId, insereLivro, modificaLivro, removeLivro } = require("../servicos/livros");

async function getLivros(req, res) {
    try{
        const livros = await getTodosLivros();
        res.send(livros);
    } catch(error) {
        res.status(500);
        res.send(error.message)
    }
}

async function getLivrosPorAutor(req, res) {
    const nomeAutor = req.query.autor
    try {
        const livrosPorEditora = await listarLivrosPorNomeAutor(nomeAutor);
        res.send(livrosPorEditora);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

async function getLivro(req, res) {
    try{
        const id = req.params.id

        if(id && Number(id)) {
            const livro = await getLivroPorId(id);
            if (!livro) {
                return res.status(404).send("Livro não encontrado");
            }
            res.send(livro);
        }
    } catch(error) {
        res.status(422);
        res.send("Id inválido")
    }
}

async function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if (req.body.nome) {
            const livroCriado = await insereLivro(livroNovo)
            res.status(201).send(livroCriado);
        }
    } catch(error) {
        res.status(500);
        res.send("O campo nome é obrigatório!")
    }
}

async function patchLivro(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)) {
            const body = req.body
            await modificaLivro(body, id)
            res.status(201)
            res.send("Livro editado com sucesso!")
        }
    } catch(error) {
        res.status(500)
        res.send("Id inválido")
    }
}

async function deleteLivro(req, res) {
    try {
        const id = req.params.id;
        if(id && Number(id)) {
            await removeLivro(id);
            res.status(200);
            res.send("Livro removido com sucesso!");
        }
    } catch(error) {
        res.status(500);
        res.send("Id inválido");
    }
}

module.exports = {
    getLivros,
    getLivrosPorAutor,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}