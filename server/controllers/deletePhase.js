const db = require("../model/index.js");

const deletePhase = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM congdoan WHERE id = ? ", id, (err, value) => {
    if (err) {
      console.log(err);
    } else {
      res.send(value);
    }
  });
};

module.exports = deletePhase;
