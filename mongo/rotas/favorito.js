import {Router} from "express";
const router = Router()

import { getFavoritos, getFavorito, postFavorito, deleteFavorito } from "../controladores/favorito.js";

router.get('/', getFavoritos);

router.get('/:id', getFavorito);

router.post('/:id', postFavorito);

router.delete('/:id', deleteFavorito);

export default router;