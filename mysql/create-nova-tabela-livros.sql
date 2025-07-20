CREATE
TABLE livros (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255),
  ano INT,
  autor_id INT,
    FOREIGN KEY (autor_id) REFERENCES autores(id)
);