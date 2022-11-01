import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { useRoutes } from './routes';
import bodyParser from 'body-parser';

const port = process.env.PORT || 4000

const app = express();
app.use(bodyParser.json());
useRoutes(app);

//Configurando o app para identificar o formato .JSON
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))

app.listen(port, () => 
  console.log('Servidor iniciando na porta ' + port)
);