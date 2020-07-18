const express = require("express");

// Import the model (cat.js) to use its database functions.
const burger = require("../models/modelBurger.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.all((data) => {
    const hbsObject = {
      burger: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

 router.post("/api/burgers", (req, res) => {
  burger.create({ name: req.body.name, isDevour: req.body.isDevour }, (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


// using put to replace the value of sleepy for a
// specific cat resource
router.put("/api/burger/:id", (req, res) => {
  const condition = { id: req.params.id };
  const update = { isDevour: req.body.value };

  burger.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were affected, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});
 
// Export routes for server.js to use.
module.exports = router;
