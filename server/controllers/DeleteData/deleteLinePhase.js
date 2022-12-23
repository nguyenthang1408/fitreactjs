const db = require("../../model/index.js");

const deleteLinePhase = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM congdoan1 WHERE id = ? ", [id], (err, value) => {
    if (err) {
      console.log(err);
    } else {
      res.send(id);
    }
  });
};

module.exports = deleteLinePhase;
