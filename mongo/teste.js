const fs = require("fs");

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"));

const novoDado = {id:'3', nome: 'Harry Potter e a ordem da fênix'};

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]));

console.log(JSON.parse(fs.readFileSync("livros.json")));