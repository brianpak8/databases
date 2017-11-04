var models = require('../models');
var connection = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get();
      //res.send();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //console.log(req, '!!!!!!!!!!!!!!!!!!!!!');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) { console.log(req) }
  }
};
