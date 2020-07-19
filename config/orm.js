// Import MySQL connection.
const connection = require("../config/connection.js");


const orm = {
  //select all
  all: (tableInput, cb) => {
    const queryString = "SELECT * FROM ??";
    console.log(queryString);
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) {
        console.error(`ERROR while retrieving burger data from database: ${err.message}`);
      }
      cb(result);
    });
  },
  //insert new burger
  create: (table, newRowData, cb) => {
    const queryString = "INSERT INTO ?? SET ?";
    const values = [table, newRowData];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        console.error(`ERROR while inserting new burger data into database: ${err.message}`);
      }
      cb(result);
    });
  },
  //update devour state of the burger
  update: (table, updateValues, condition, cb) => {
    const queryString = "UPDATE ?? SET ? WHERE ?";
    const values = [table, updateValues, condition];

    console.log(queryString);
    connection.query(queryString, values, (err, result) => {
      if (err) {
        console.error(`ERROR while updating burger data into database: ${err.message}`);
      }
      cb(result);
    });
  }
};

// Export the orm object
module.exports = orm;
