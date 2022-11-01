import {Request, Response} from 'express'
import { badRequest, internalServerError, notFound, Ok } from '../services/erros';
import {Produto, produtoModel} from '../models/Produtos'

const insertProduto = (req: Request, res: Response) => {
  {
        const produto = req.body;
  //     if (!produto)
  //       return badRequest(res, "Produto inválido");

  //     if (!produto.nome)
  //       return badRequest(res, 'Informe o nome do produto');

  //     if (!parseFloat(produto.valor))
  //       return badRequest(res, 'Informe o preço');
  }

  const Produto = req.body as Produto;

  return produtoModel.insertProduto(Produto)
    .then(produto => {
      res.json(produto);
    })
    .catch(err => internalServerError(res, err));
}

const updateProduto = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  {
    if(!id)
      return badRequest(res, "Id inválido");

    const produto = req.body;

    const savedProduto = await produtoModel.getProdutoId(id);
    if(!savedProduto)
      return notFound(res);
  }
  
  const Produto = req.body as Produto;
  
  return produtoModel.updateProduto(Produto)
  .then(produto => {
    res.json(produto)
  })
  .catch(err => internalServerError(res, err));
}

const listProdutos = (req: Request, res: Response) => {
  produtoModel.listProdutos()
    .then(produtos => {
      res.json(produtos)
    })
    .catch(err => internalServerError(res, err));
}

const getProdutoId = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  {
    if(!id)
      return badRequest(res, 'Id inválido!');
  }

  produtoModel.getProdutoId(id)
  .then(produto => {
    if(produto)
      return res.json(produto);
    else
      return notFound(res);
  })
  .catch(err => internalServerError(res, err));
}

const deleteProduto = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  {
    if(!id)
      return badRequest(res, "Id inválido!");

    const savedProduto =  await produtoModel.getProdutoId(id);
    if(!savedProduto)
      return notFound(res);
  }

  return produtoModel.deleteProduto(id)
    .then(() => Ok(res))
    .catch(err => internalServerError(res, err));
}

export const produtoController = {
  insertProduto,
  listProdutos,
  getProdutoId,
  deleteProduto,
  updateProduto
}