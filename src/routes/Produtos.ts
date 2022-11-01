import { Router } from "express";
import { produtoController } from "../controllers/Produtos";

const ProdutoRouter = Router();
ProdutoRouter.post('/', produtoController.insertProduto);
ProdutoRouter.get('/', produtoController.listProdutos);
ProdutoRouter.get('/:id', produtoController.getProdutoId);
ProdutoRouter.delete('/:id', produtoController.deleteProduto);
ProdutoRouter.put('/:id', produtoController.updateProduto);

export {
  ProdutoRouter
}