const db = require("../model/index.js");

const addPhase = (req, res) => {
  const idConvert = req.body.id;
  const namePhase = req.body.name;
  const progress = 0;
  const startDay = req.body.startDay;
  const endDate = req.body.endDate;
  const date1 = new Date(endDate);
  const date2 = new Date(startDay);
  const diff = Math.abs(date2.getTime() - date1.getTime());
  const Difference_In_Days = diff / (1000 * 3600);
  const finish = 0;
  const totalHours = Difference_In_Days;
  const inDay = 0;
  const reality = 0;
  const efficiency = 0;
  const overtime = 0;
  const member = req.body.member;
  const card = req.body.card;

  db.query(
    "INSERT  INTO congdoan(name, tiendo, ngaybatdau, ngaydukien, ngayhoanthanh, tonggio, trongngay, thucte, hieusuat, tangca, thanhvien,card, parent_id) value(?,?,?,?,?,?,?,?,?,?,?,?,?)",
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
      idConvert,
    ],
    (err, value) => {
      if (err) {
        console.log(err);
      } else {
        res.send("inserted success");
      }
    }
  );
};

module.exports = addPhase;
