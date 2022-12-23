const db = require("../../model/index.js");

const isUserAuth = (req, res) => {
  res.send("authenticated congrats!");
};

module.exports = isUserAuth;
