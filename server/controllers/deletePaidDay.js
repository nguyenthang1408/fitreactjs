const db = require("../model/index.js");

const deletePaidDay = (req,res) => {
    const id = req.params.id;
    console.log(id)

    db.query("DELETE FROM trongngay WHERE id = ?", id, (err, value) => {
        if(err)
        {
            console.log(err);
        }
        else{
            res.send("Delete");
        }
    })
}

module.exports = deletePaidDay;