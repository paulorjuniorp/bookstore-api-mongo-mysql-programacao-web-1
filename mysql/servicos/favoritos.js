const db = require('../bd')
const {getLivroPorId} = require('../servicos/livros')

async function getTodosFavoritos() {
    const [rows] = await db.query("select * from favoritos");

    return rows;
}

async function getFavoritoPorId(id) {
    const [rows] = await db.query('SELECT * FROM favoritos WHERE id = ?',[id]);
    return rows[0];
}

async function insereFavorito(idFavorito) {
    const livroEncontrado = await getLivroPorId(idFavorito)
    const {id, nome, autor, ano} = livroEncontrado

    const [result] = await db.query('INSERT INTO favoritos(id,nome,autor,ano) VALUES (?,?,?,?)',[id,nome,autor,ano]);
    
    return {id: result.insertId, ...livroEncontrado};
}


async function removeFavorito(id) {
    await db.query('DELETE FROM favoritos WHERE id = ?',[id])
}


module.exports = {
    getTodosFavoritos,
    getFavoritoPorId,
    insereFavorito,
    removeFavorito
}