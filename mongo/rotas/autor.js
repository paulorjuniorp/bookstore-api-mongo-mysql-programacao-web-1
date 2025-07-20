import {Router} from "express";
const router = Router()

import { getAutores, getAutor, postAutor, deleteAutor } from "../controladores/autor.js";

router.get('/', getAutores);

router.get('/:id', getAutor);

router.post('/', postAutor);

router.patch('/:id', postAutor);

router.delete('/:id', deleteAutor);

export default router;