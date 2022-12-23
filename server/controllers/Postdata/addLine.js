const db = require("../../model/index.js");

const AddLine = (req, res) => {
  const name = req.body.name;
  const progress = req.body.progress;
  const startDay = req.body.startDay;
  const endDate = req.body.endDate;
  const member = req.body.member;
  const salary = req.body.salary;
  const idCard = req.body.idCard;
  const type = req.body.type;
  const parent_Id = req.body.parent_Id;

  db.query(
    "INSERT INTO tiendomaymoc1(tenmay,tiendo,ngaybatdau,ngaydukien,nhomthuchien,bophan,mathe,type,parent_Id) value(?,?,?,?,?,?,?,?,?)",
    [name, progress, startDay, endDate, member, salary, idCard, type, parent_Id],
    (err, value) => {
      if (err) {
        console.log(err);
      } else {
        res.send("inserted success");

        db.query("SELECT SUM(tiendo) AS sum, COUNT(tenmay) as count FROM `tiendomaymoc1` WHERE parent_id = ?",
        [parent_Id],
        (err,result) => {
          if(err)
          {
            console.log(err);
          }
          else
          {
            const sumProgress = result[0].sum / result[0].count;

            db.query("UPDATE tiendomaymoc SET tiendo = ? WHERE id = ?",
              [sumProgress,parent_Id],
              (err,value) => {
                if(err)
                {
                  console.log(err);
                }
                else
                {
                  
                }
              }
              )
          }
        }
        )

        
      }
    }
  );
};

module.exports = AddLine;
