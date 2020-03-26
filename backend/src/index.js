/**
 * GET: Buscar informação no backend
 * POST: Adicionar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar um informação no backend
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após '?' (Filtros, paginação)
  *     app.get('/users', (request, response) => {
  *         const query = request.query;
  * 
  * Route Params: Parâmetros utilizados para buscar um único recurso. http://localhost:3333/users/1
  *     app.get('/users/:id', (request, response) => {
  *         const params = request.params;
  * 
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  *     POST
  *         const params = request.body;
  * 
  */

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors(
    // {
    //     origin: 'http://localhost:3000'
    // }
));
app.use(express.json());
app.use(routes);
app.listen(3333);