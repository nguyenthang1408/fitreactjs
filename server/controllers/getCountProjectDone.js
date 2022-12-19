const db = require("../model/index.js");

const getCountProjectDone = (req,res) => {
    
    db.query("SELECT COUNT(tenmay) as tenmay FROM tiendomaymoc WHERE tiendo = 100", 
    (err, result) => {
       if(err)
       {
        console.log(err);
       }
       else
       {
        res.send(result);
       }
    })
}

module.exports = getCountProjectDone;