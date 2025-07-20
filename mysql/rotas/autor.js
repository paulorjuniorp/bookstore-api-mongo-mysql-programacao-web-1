const {Router} = require("express");
const router = Router();

const { getAutores, getAutor, postAutor, patchAutor, deleteAutor } = require("../controladores/autor");


router.get('/', getAutores);

router.get('/:id', getAutor);

router.post('/', postAutor);

router.patch('/:id', patchAutor);

router.delete('/:id', deleteAutor);

module.exports = router