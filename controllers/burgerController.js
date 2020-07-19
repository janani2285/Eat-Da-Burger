const express = require("express");


const burger = require("../models/modelBurger.js");

const router = express.Router();

//get route to retrieve all burger
router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burger: data,
    };
    res.render("index", hbsObject);
  });
});

//post route to insert new burger
router.post("/api/burgers", (req, res) => {
  burger.create({ name: req.body.name, isDevour: req.body.isDevour }, (result) => {
    res.json({ id: result.insertId });
  });
});


//put route to update the devour state of a burger
router.put("/api/burger/:id", (req, res) => {
  const condition = { id: req.params.id };
  const update = { isDevour: req.body.value };

  burger.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
