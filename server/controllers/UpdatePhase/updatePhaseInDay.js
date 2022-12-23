const db = require("../../model/index.js");

const updatePhaseInDay = (req, res) => {
  const id = req.body.id;
  const inDay = req.body.inDay;
  const today = new Date();
  const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;

  db.query(
    "INSERT INTO trongngay2(in_day,id_parent,time) value(?,?,?)",
    [inDay, id, dateTime],
    (err, value) => {
      if (err) {
        console.log(err);
      } else {
        db.query(
          "SELECT in_day FROM trongngay2 WHERE time in (SELECT max(time) FROM trongngay2 WHERE time LIKE ? and id_parent = ?)",
          [date + "%", id],
          (err, value) => {
            if (err) {
              console.log(err);
            } else {
              const overtime = value[0].in_day - 8;
              db.query(
                "UPDATE congdoan SET trongngay = ?, tangca = ? WHERE id = ?",
                [inDay, overtime, id],
                (err, value) => {
                  if (err) {
                    console.log(err);
                  } else {
                    res.send(value);
                  }
                }
              );
            }
          }
        );
      }
    }
  );
};
module.exports = updatePhaseInDay;
