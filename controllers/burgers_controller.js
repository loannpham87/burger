var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// get route
// router.get("/", function(req, res){
//   res.redirect("/");
// });

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// router.post("/api/burgers", function(req, res) {
//   burger.insertOne([
//     "burger", "eaten"
//   ], [
//     req.body.burger, false
//   ], function(result) {
//     // Send back the ID of the new burger
//     // res.json({ id: result.insertId });
//     res.redirect("/");

//   });
// });

router.post("/api/burgers", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  burger.insertOne(req.body.burger, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// router.put("/api/burgers/:id", function(req, res) {
//   var burgerId = "id = " + req.params.id;

//   burger.updateOne({
//     eaten: true, 
//   }, burgerId, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

router.put("/api/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

router.delete("/api/burgers/:id", function(req, res) {
    var burgerId = "id = " + req.params.id;
  
    burger.delete(burgerId, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// Export routes for server.js to use.
module.exports = router;