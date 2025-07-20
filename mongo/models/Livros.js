import mongoose from "mongoose";
import { autorSchema } from "./Autores.js";

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    editora: {type: String},
    preco: {Number},
    paginas: {Number},
    autor: { type: autorSchema}
}, {versionKey: false});

const livro = mongoose.model("livros",livroSchema);
export default livro;