const db = require("../../model/index.js");

const updatePaid = (req,res) => {
    const paid = req.body.paid;
    const id = req.body.id;

    db.query("UPDATE trongngay SET working = ? WHERE id = ?",
    [paid, id], 
     (err, result) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send("Success");
        }
     }
    )
}

module.exports = updatePaid;