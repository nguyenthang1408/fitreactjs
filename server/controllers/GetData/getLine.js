const db = require("../../model/index.js");

const getLine = (req, res) => {
  db.query("SELECT * FROM tiendomaymoc1", (err, value) => {
    if (err) {
      console.log(err);
    } else {
      res.send(value);
    }
  });
};

module.exports = getLine;
