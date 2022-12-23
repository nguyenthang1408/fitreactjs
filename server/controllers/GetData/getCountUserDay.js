const db = require("../../model/index.js");


const getCountUserDay = (req,res) => {
    const day = req.query.day;

    db.query("SELECT COUNT(username) as upPaid FROM trongngay WHERE date = ?", day,
    (err, value) => {
     if(err)
     {
       console.log(err);
     }
     else
     {
       res.send(value);
     }
   })
}

module.exports = getCountUserDay;