// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.

insertOne: function(name, cb) {
    orm.insertOne("burgers", [
      "burger", "eaten"
    ], [
      name, false
    ], cb);
  },

  // insertOne: function(cols, vals, cb) {
  //   orm.insertOne("burgers", cols, vals, function(res) {
  //     cb(res);
  //   });
  // },
  // updateOne: function(objColVals, burgerId, cb) {
  //   orm.updateOne("burgers", objColVals, burgerId, function(res) {
  //     cb(res);
  //   });
  // },

 updateOne: function(id, cb) {
    var condition = "id=" + id;
    orm.updateOne("burgers", {
      eaten: 1
    }, condition, cb);
  },


  delete: function(burgerId, cb) {
    orm.delete("burgers", burgerId, function(res) {
        cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;


