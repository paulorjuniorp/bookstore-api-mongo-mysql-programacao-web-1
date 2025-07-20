import mongoose from "mongoose";

const favoritoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    livro_id:{type: mongoose.Schema.Types.ObjectId, ref:'livros'},
    nome: {type: String, required: true}
}, {versionKey: false});

const favorito = mongoose.model("favoritos",favoritoSchema);
export default favorito;