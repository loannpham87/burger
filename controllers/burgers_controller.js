var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  burger.insertOne(["burger", "eaten"], [req.body.burger, false], function(result) {
    // Send back the ID of the new quote
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      eaten: true
    },
    condition,
    function(result) {
      console.log(result);
      //res.redirect does not work here.  Another option would be res.sendStatus(200);
      res.json("/");
    }
  );
});

router.delete("/burgers/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    console.log(result);
    //res.redirect does not work here.  Another option would be res.sendStatus(200);
    res.json("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
