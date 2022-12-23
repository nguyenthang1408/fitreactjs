const db = require("../../model/index.js");

const addLinePhase = (req, res) => {
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
  const card = req.body.idCard;
  const idP = req.body.idP;


  db.query(
    "INSERT  INTO congdoan1(name, tiendo, ngaybatdau, ngaydukien, ngayhoanthanh, tonggio, trongngay, thucte, hieusuat, tangca, thanhvien,card , parent_id, parent_id_id) value(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
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
      idP,
    ],
    (err, value) => {
      if (err) {
        console.log(err);
      } else {
        res.send(value);

        db.query("SELECT SUM(tiendo) as sum, COUNT(tiendo) as count FROM `congdoan1` WHERE parent_id = ?",
        [idConvert],
        (err,result) => 
        {
          if(err)
          {
            console.log(err);
          }
          else
          {
            const sum = result[0].sum / result[0].count;

            db.query("UPDATE tiendomaymoc1 SET tiendo = ? WHERE id = ?",
            [sum, idConvert],
            (err, result) => {
              if(err)
              {
                console.log(err);
              }
              else
              {
                db.query("SELECT SUM(tiendo) as sum, COUNT(tiendo) as count FROM `tiendomaymoc1` WHERE parent_id = ?",
                    [idP],
                    (err, result) => {
                    if(err)
                    {
                      console.log(err);
                    }
                    else
                    {
                      const sumProgress = result[0].sum / result[0].count;
       
                      db.query("UPDATE tiendomaymoc SET tiendo = ? WHERE id = ?",
                      [sumProgress, idP],
                      (err,result) => {
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
            )
          }
        }
        );
      }
    }
  );
};

module.exports = addLinePhase;
