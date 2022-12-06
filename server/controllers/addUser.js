const db = require("../model/index.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const addUser = (req, res) => {
  const user = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    } else {
      db.query(
        "SELECT username FROM user WHERE username = '" + user + "'",
        function (err, result) {
          if (result.length === 0) {
            db.query(
              "INSERT INTO user(username,password) value(?,?)",
              [user, hash],
              (err, value) => {
                if (err) {
                  console.log(err);
                } else {
                  res.send("inserted success");
                }
              }
            );
          } else {
            res.send("existing sql");
          }
        }
      );
    }
  });
};

module.exports = addUser;
