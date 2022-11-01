import { Application, Router } from "express";
import { ProdutoRouter } from "./Produtos";

//Função para inserir as rotas

export const useRoutes = (app: Application) => {
  const apiRouter = Router();
  apiRouter.use('/produtos', ProdutoRouter);

  app.use('/api/v1', apiRouter);
}
