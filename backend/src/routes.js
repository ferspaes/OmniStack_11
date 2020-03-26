const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.get('/ongs', OngController.index);
routes.get('/incidents', IncidentsController.index);
routes.get('/profile', ProfileController.index);

routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentsController.create);
routes.post('/sessions', SessionController.create);

routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;