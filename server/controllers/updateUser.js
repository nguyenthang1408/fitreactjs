const db = require("../model/index.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const updateUser = (req, res) => {
  const user = req.body.username;
  const password = req.body.password;
  const id = req.body.id;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    } else {
      db.query(
        "UPDATE user SET username = ? , password = ? WHERE id = ? ",
        [user, hash, id],
        (err, value) => {
          if (err) {
            console.log(err);
          } else {
            res.send("updated success");
          }
        }
      );
    }
  });
};

module.exports = updateUser;
