const db = require("../../model/index.js");

const editPhase = (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const startDay = req.body.startDay;
  const endDate = req.body.endDate;
  const finish = req.body.finish;
  const member = req.body.member;

  db.query(
    "UPDATE congdoan SET name = ?, ngaybatdau = ?, ngaydukien = ?, ngayhoanthanh = ?, thanhvien = ? WHERE id = ?",
    [name, startDay, endDate, finish, member, id],
    (err, value) => {
      if (err) {
        console.log(err);
      } else {
        res.send(value);
      }
    }
  );
};

module.exports = editPhase;
