const {Router} = require("express");
const router = Router();

const { getLivros, getLivrosPorAutor, getLivro, postLivro, patchLivro, deleteLivro } = require("../controladores/livro");


router.get('/', getLivros);

router.get('/busca', getLivrosPorAutor)

router.get('/:id', getLivro);

router.post('/', postLivro);

router.patch('/:id', patchLivro);

router.delete('/:id', deleteLivro);

module.exports = router