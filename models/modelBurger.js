// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  all: (cb) => {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
 /*  create: (newCat, cb) => {
    orm.create("cats", newCat, (res) => {
      cb(res);
    });
  },
  update: (catData, criteria, cb) => {
    orm.update("cats", catData, criteria, (res) => {
      cb(res);
    });
  },
  delete: (id, cb) => {
    orm.delete("cats", id, (res) => {
      cb(res);
    });
  }, */
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
