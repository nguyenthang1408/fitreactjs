const db = require("../../model/index.js")

const getInDay = (req,res) => {
    var today = new Date();
    const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    
    db.query(`SELECT * FROM trongngay WHERE date = "${date}"`, (err, result) => {
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(result)
        }
    })
}

module.exports = getInDay;