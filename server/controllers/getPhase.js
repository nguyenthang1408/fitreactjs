const db = require("../model/index.js");

const getPhase = (req, res) => {
  db.query("SELECT * FROM congdoan", (err, value) => {
    if (err) {
      console.log(err);
    } else {
      res.send(value);
    }
  });
};

module.exports = getPhase;
