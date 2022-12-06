const db = require("../model/index.js");

const getTsc = (req, res) => {
  const salary = "TSC";
  db.query(
    "SELECT * FROM tiendomaymoc where bophan = ?",
    [salary],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};

module.exports = getTsc;
