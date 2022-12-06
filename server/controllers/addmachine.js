const db = require("../model/index.js");

const addMachine = (req, res) => {
  const name = req.body.name;
  const progress = req.body.progress;
  const startDay = req.body.startDay;
  const endDate = req.body.endDate;
  const salary = req.body.salary;
  const member = req.body.member;
  const idCard = req.body.idCard;
  const type = req.body.type;

  db.query(
    "SELECT tenmay FROM tiendomaymoc WHERE tenmay = '" + name + "'",
    function (err, result) {
      if (result.length === 0) {
        db.query(
          "INSERT INTO tiendomaymoc(tenmay,tiendo,ngaybatdau,ngaydukien,nhomthuchien,bophan,mathe,type) value(?,?,?,?,?,?,?,?)",
          [name, progress, startDay, endDate, member, salary, idCard, type],
          (err, result) => {
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
};

module.exports = addMachine;
