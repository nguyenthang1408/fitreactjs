const db = require("../../model/index.js");

const getLinePhase = (req, res) => {
  db.query("SELECT * FROM congdoan1", (err, value) => {
    if (err) {
      console.log(err);
    } else {
      res.send(value);
    }
  });
};

module.exports = getLinePhase;
