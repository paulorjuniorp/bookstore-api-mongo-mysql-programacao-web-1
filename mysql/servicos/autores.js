const db = require('../bd')

async function getTodosAutores() {
    const [rows] = await db.query("select * from autores");

    return rows;
}

async function getAutorPorId(id) {
    const [rows] = await db.query('SELECT * FROM autores WHERE id = ?',[id]);
    return rows[0];
}

async function insereAutor(autorNovo) {
    const {nome, nacionalidade} = autorNovo;
    const [result] = await db.query('INSERT INTO autores(nome,nacionalidade) VALUES (?,?)',[nome,nacionalidade]);

    return {id: result.insertId, ...autorNovo};
}

async function modificaAutor(modificacoes, id) {
    const campos = [];
    const valores = [];
    for(const [chave, valor] of Object.entries(modificacoes)) {
        campos.push(`${chave} = ?`);
        valores.push(valor);
    }
    valores.push(id);
    const sql = `UPDATE autores SET ${campos.join(', ')} WHERE id = ?`;
    await db.query(sql, valores);
}

async function removeAutor(id) {
    await db.query('DELETE FROM autores WHERE id = ?',[id])
}


module.exports = {
    getTodosAutores,
    getAutorPorId,
    insereAutor,
    modificaAutor,
    removeAutor
}