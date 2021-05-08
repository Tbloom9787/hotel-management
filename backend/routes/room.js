const route = require('express').Router();
const roomController = require('../controllers/room');

route.get('/', roomController.getAllRooms);
route.get('/:id', roomController.getRoom);
route.post('/addroom', roomController.addRoom);

module.exports = route;
