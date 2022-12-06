const db = require("../model/index.js");

const AddLine = (req, res) => {
  const name = req.body.name;
  const progress = req.body.progress;
  const startDay = req.body.startDay;
  const endDate = req.body.endDate;
  const member = req.body.member;
  const salary = req.body.salary;
  const idCard = req.body.idCard;
  const type = req.body.type;

  db.query(
    "INSERT INTO tiendomaymoc1(tenmay,tiendo,ngaybatdau,ngaydukien,nhomthuchien,bophan,mathe,type) value(?,?,?,?,?,?,?,?)",
    [name, progress, startDay, endDate, member, salary, idCard, type],
    (err, value) => {
      if (err) {
        console.log(err);
      } else {
        res.send("inserted success");
      }
    }
  );
};

module.exports = AddLine;
