


const db = require('../db/config');

const Drink = {};
//view all
Drink.findAll = () => {
  return db.query('SELECT * FROM games ORDER BY id ASC');
};
//view single
Drink.findById = id => {
  return db.oneOrNone(`SELECT * FROM games WHERE id = $1`, [id]);
};
//add game
Drink.create = drink => {
  console.log(drink);
  return db.one(
    `INSERT INTO games (name, rules, type_id) 
    VALUES ($1, $2, $3) RETURNING *`,
    [drink.name, drink.rules, drink.type_id]
  );
};
//update game
Drink.update = (drink,id) => {
  console.log(drink);
  console.log(id);
  return db.none(
    `
    UPDATE games SET 
    name = $1, 
    rules = $2, 
    type_id = $3 
    WHERE id = $4
    `,
    [drink.name, drink.rules, drink.type_id, id]
  );
};
//delete game
Drink.destroy = id => {
  return db.none(
    `
    DELETE FROM games WHERE id = $1
    `,
    [id]
  );
};

module.exports = Drink;
