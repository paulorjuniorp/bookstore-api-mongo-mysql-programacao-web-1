import express from "express"
const app = express();
import cors from "cors";
import pool from "./config/dbConnect.js";

const port = 8000;
const conexao = await pool();

import rotaLivro from "./rotas/livro.js";
import rotaFavorito from "./rotas/favorito.js";
import rotaAutor from "./rotas/autor.js";


conexao.on("error", (erro) => {
    console.error("erro de conexão", erro)
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

app.use(cors({origin: "*"}));

app.use(express.json())

app.use('/livros', rotaLivro);

app.use('/favoritos', rotaFavorito)

app.use('/autores', rotaAutor)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});