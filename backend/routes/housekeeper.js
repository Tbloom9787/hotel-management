const route = require('express').Router();
const housekeeperController = require('../controllers/housekeeper');

route.get('/', housekeeperController.getAllRooms);
route.get('/:id', housekeeperController.getRoom);
route.post('/addhousekeeper', housekeeperController.addRoom);

module.exports = route;
