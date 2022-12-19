const db = require("../model/index.js");

const getAps = (req, res) => {
  const salary = "APS";

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

module.exports = getAps;
