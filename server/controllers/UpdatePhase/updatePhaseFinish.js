const db = require("../../model/index.js");

const updatePhaseFinish = (req, res) => {
  const finish = req.body.finish;
  const id = req.body.id;
  const progress = 100;
  const idCover = req.body.idCover;


  db.query(
    "SELECT ngaybatdau FROM congdoan WHERE id = ?",
    [id],
    (err, value) => {
      if (err) {
        console.log(err);
      } else {
        if (value.length > 0) {
          const date1 = new Date(value[0].ngaybatdau);
          const date2 = new Date(finish);
          const diff = Math.abs(date2.getTime() - date1.getTime());
          const Difference_In_Days = diff / (1000 * 3600);

          db.query(
            "SELECT tonggio FROM congdoan WHERE id = ?",
            [id],
            (err, value) => {
              if (err) {
                console.log(err);
              } else {
                if (value.length > 0) {
                  const efficiency = Math.round(
                    (value[0].tonggio / Difference_In_Days) * 100
                  );
                  db.query(
                    "UPDATE congdoan SET ngayhoanthanh = ?, tiendo = ?, thucte = ?, hieusuat = ? WHERE id = ?",
                    [finish, progress, Difference_In_Days, efficiency, id],
                    (err, result) => {
                      if (err) {
                        console.log(err);
                      } else {
                        res.send(result);

                        db.query("SELECT SUM(tiendo) as sum, COUNT(tiendo) as count FROM `congdoan` WHERE parent_id = ?",
                        [idCover], (err,result) => {
                          if(err)
                          {
                            console.log(err);
                          }
                          else
                          {
                            const sum = result[0].sum / result[0].count;

                            db.query("UPDATE tiendomaymoc SET tiendo = ? WHERE id = ?", 
                            [sum, idCover],
                            (err,result) => {
                              if(err)
                              {
                                console.log(err);
                              }
                              else
                              {
                                
                              }
                            })
                          }
                        })
                      }
                    }
                  );
                }
              }
            }
          );
        }
      }
    }
  );
};

module.exports = updatePhaseFinish;
