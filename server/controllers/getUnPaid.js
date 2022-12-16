const db = require("../model/index.js");


const getUnPaid = (req,res) => {
    var today = new Date();
    const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();


    db.query("SELECT COUNT(username) as upPaid FROM trongngay WHERE date = ?", date,
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

module.exports = getUnPaid;