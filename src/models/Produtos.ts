import { dbQuery, dbQueryId } from "../services/db"

export type Produto = {
  id: number;
  nome: string;
  valor: number;
}

const insertProduto = async (produto: Produto) => {
  await dbQuery(`INSERT INTO produto (nome, valor) VALUES(?, ?)`, [produto.nome, produto.valor])

  //retornando o id da tabela que foi inserida
  let retorno = await dbQuery(`SELECT seq AS Id FROM sqlite_sequence WHERE name = 'produto'`);
  return getProdutoId(retorno[0].Id);
}

const updateProduto = async (produto: Produto) => {
  await dbQuery(`UPDATE produto SET nome = ?, valor = ? WHERE id = ?`, [produto.nome, produto.valor, produto.id]);
  return getProdutoId(produto.id);
}

const listProdutos = async () => {
  const retorno = await dbQuery(`SELECT * FROM produto`);
  return retorno as Produto[];
}

const getProdutoId = async(id: number) => {
  const retorno = await dbQueryId(`SELECT * FROM produto WHERE id = ?`, [id]);
  return retorno as Produto | undefined;
}

const deleteProduto = async(id: number) => {
  await dbQuery(`DELETE FROM produto WHERE id = ?`, [id]);
}

export const produtoModel = {
  insertProduto,
  listProdutos,
  getProdutoId,
  deleteProduto,
  updateProduto
}