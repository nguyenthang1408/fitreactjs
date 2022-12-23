const db = require("../../model/index.js");

const getCountProjectSum = (req,res) => {
    
    db.query("SELECT COUNT(tenmay) as tenmay FROM tiendomaymoc", 
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

module.exports = getCountProjectSum;