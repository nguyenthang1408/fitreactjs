const db = require("../model/index.js");

const updateLinePhase = (req, res) => {
  const id = req.body.id;
  const namePhase = req.body.name;
  const progress = 0;
  const startDay = req.body.startDay;
  const endDate = req.body.endDate;
  const finish = 0;
  const totalHours = 0;
  const inDay = 0;
  const reality = 0;
  const efficiency = 0;
  const overtime = 0;
  const member = req.body.member;
  const card = req.body.idCard;

  db.query(
    "UPDATE congdoan1 SET name = ?, tiendo = ?, ngaybatdau = ?, ngaydukien = ?, ngayhoanthanh = ?, tonggio = ?, trongngay = ?, thucte = ?, hieusuat = ?, tangca = ?, thanhvien = ?, card = ? WHERE id = ?",
    [
      namePhase,
      progress,
      startDay,
      endDate,
      finish,
      totalHours,
      inDay,
      reality,
      efficiency,
      overtime,
      member,
      card,
      id,
    ],
    (err, value) => {
      if (err) {
        console.log(err);
      } else {
        res.send(value);
      }
    }
  );
};

module.exports = updateLinePhase;
