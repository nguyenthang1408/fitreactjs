const db = require("../model/index.js");

const deleteUser = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM user WHERE id= ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = deleteUser;
