const db = require("../model/index.js");

const getAec = (req, res) => {
  const salary = "AEC";
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

module.exports = getAec;
