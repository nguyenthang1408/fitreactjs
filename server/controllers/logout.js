const db = require("../model/index.js");

const logout = (req, res) => {
  req.session.destroy();
  res.send({ message: "delete session" });
};

module.exports = logout;
