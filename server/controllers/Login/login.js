const db = require("../../model/index.js");
const bcrypt = require("bcrypt");

const login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query("SELECT * FROM user WHERE username = ?", username, (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          req.session.user = result;
          res.send(result);
        } else {
          res.send({ message: "wrong password/username combination!" });
        }
      });
    } else {
      res.send({ message: "User doesn't exist" });
    }
  });
};
module.exports = login;
