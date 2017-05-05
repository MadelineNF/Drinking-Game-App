const Drink = require('../models/drinkModels');

const controller = {};
//index method
controller.index = (req,res) => {
  Drink.findAll()
    .then(drinks =>  {
      res.render('drinkViews/drink-index',{
        documentTitle: 'Drinking Games',
        drinksData: drinks,
      })
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
//single game method
controller.show = (req,res) => {
  Drink.findById(req.params.id)
    .then(drink => {
      res.render('drinkViews/drink-single',{
        documentTitle: 'Drinking Games',
        drink: drink,
      })
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
//add game method
controller.create = (req,res) => {
  console.log(req.body);
  Drink.create({
    name: req.body.name,
    rules: req.body.rules,
    type_id: req.body.type_id
  })
  .then(drink => {
    res.redirect('/drinks');
  })
  .catch(err => {
      res.status(400).json(err);
    });
};
//Update game method
controller.update = (req,res) => {
  Drink.update({
    name: req.body.name,
    rules: req.body.rules,
    type_id: req.body.type_id
  },req.params.id)
  .then(drink => {
    res.redirect('/drinks');
  })
  .catch(err => {
      res.status(400).json(err);
    });
};
//Delete game method
controller.destroy = (req,res) => {
  Drink.destroy(req.params.id)
  .then(() => {
    res.redirect('/drinks');
  })
  .catch(err => {
      res.status(400).json(err);
    });
};
//ACTUAL EDIT CONTROLLER
controller.edit = (req,res) => {
  Drink.findById(req.params.id)
    .then(drinks =>  {
      res.render('drinkViews/drink-edit',{
        documentTitle: 'Drinking Games',
        drinks: drinks,
        id: req.params.id,
      })
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
// //Random Game
// controller.rando = (req,res) => {
//   Drink.rando()
// };

//export controller
module.exports = controller;