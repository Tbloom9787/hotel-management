const route = require('express').Router();
const guestController = require('../controllers/guest');

route.get('/', guestController.getAllGuests);
route.get('/:id', guestController.getGuest);
route.patch('/:id', guestController.updateGuest);
route.post('/', guestController.addGuest);

module.exports = route;
