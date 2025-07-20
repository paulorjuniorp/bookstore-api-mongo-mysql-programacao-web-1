import {Router} from "express";
const router = Router();

import { getLivros, getLivro, getLivroPorEditora, postLivro, patchLivro, deleteLivro } from "../controladores/livro.js";

router.get('/', getLivros);

router.get('/busca', getLivroPorEditora);

router.get('/:id', getLivro);

router.post('/', postLivro);

router.patch('/:id', patchLivro);

router.delete('/:id', deleteLivro);

export default router;