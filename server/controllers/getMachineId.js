const db = require("../model/index.js");

const getMachineId = (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM tiendomaymoc WHERE id = ?", id, (err, value) => {
    if (err) {
      console.log(err);
    } else {
      res.send(value);
    }
  });
};

module.exports = getMachineId;
