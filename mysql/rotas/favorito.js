const {Router} = require("express");
const router = Router()

const { getFavoritos, getFavorito, postFavorito, deleteFavorito } = require("../controladores/favorito");

router.get('/', getFavoritos);

router.get('/:id', getFavorito);

router.post('/:id', postFavorito);

router.delete('/:id', deleteFavorito);

module.exports = router