const db = require('../bd');
const {getAutorPorId} = require('../servicos/autores');

async function getTodosLivros() {
    const [rows] = await db.query("select l.*,a.nome as nome_autor,a.nacionalidade as nacionalidade_autor from livros l left join autores a on a.id = l.autor_id");

    return rows;
}

async function listarLivrosPorNomeAutor(nomeAutor) {
    const [rows] = await db.query(
        `select l.*, a.nome AS autor_nome, a.nacionalidade AS autor_nacionalidade from livros as l left join autores as a on l.autor_id = a.id where a.nome like ?`,
        [`%${nomeAutor}%`]
    );
    return rows;
}

async function getLivroPorId(id) {
    const [rows] = await db.query('SELECT l.*, a.nome as nome_autor, a.nacionalidade as nacionalidade_autor FROM livros l left join autores a on a.id = l.autor_id where l.id = ?',[id]);
    return rows[0];
}

async function insereLivro(livroNovo) {
    const {nome, ano} = livroNovo;
    let {autor_id} = livroNovo
    let autorExiste = null;
    if(autor_id) {
        autorExiste = await getAutorPorId(autor_id);
        if(!autorExiste) {
            autor_id = null;
        }
    }
    const [result] = await db.query('INSERT INTO livros(nome,ano,autor_id) VALUES (?,?,?)',[nome,ano,autor_id]);

    return {id: result.insertId, ...livroNovo};
}

async function modificaLivro(modificacoes, id) {
    const campos = [];
    const valores = [];
    for(const [chave, valor] of Object.entries(modificacoes)) {
        campos.push(`${chave} = ?`);
        valores.push(valor);
    }
    valores.push(id);
    const sql = `UPDATE livros SET ${campos.join(', ')} WHERE id = ?`;
    await db.query(sql, valores);
}

async function removeLivro(id) {
    await db.query('DELETE FROM livros WHERE id = ?',[id])
}


module.exports = {
    getTodosLivros,
    listarLivrosPorNomeAutor,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    removeLivro
}