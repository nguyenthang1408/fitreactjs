const db = require("../../model/index.js");

const getSumSalary = (req,res) => {
    

    db.query("SELECT SUM(tiendo) AS sum, COUNT(tenmay) as count, bophan FROM `tiendomaymoc` GROUP BY bophan",
    (err,result) => 
    {
         if(err)
         {
            console.log(err);
         }
         else
         {
            res.send(result);
         }
    }
    )
}


module.exports = getSumSalary;