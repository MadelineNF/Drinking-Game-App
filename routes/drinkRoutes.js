const express = require('express');
const controller = require('../controllers/drinkControllers');

const drinkRoutes = express.Router();

//index route
drinkRoutes.get('/', controller.index);
//add game route
drinkRoutes.get('/add', (req, res) => {
  res.render('drinkViews/drink-add', {
    documentTitle: 'Drinking Games',
  });
});
//edit game route
drinkRoutes.get('/edit/:id', controller.edit);
//singel game view route
drinkRoutes.get('/:id', controller.show);
//add game
drinkRoutes.post('/', controller.create);
//update game
drinkRoutes.put('/:id', controller.update);
//destroy game
drinkRoutes.delete('/:id', controller.destroy);
// //random game
// drinkRoutes.rando('/:id',controller.rando);

//export routes
module.exports = drinkRoutes;
