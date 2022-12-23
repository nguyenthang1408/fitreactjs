const db = require("../../model/index.js");

const addDayChange = (req, res) => {
    const username = req.body.username;
    const card = req.body.card;
    const paid = req.body.paid;
    const salary = req.body.salary;
    var today = new Date();
    const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();


    db.query("INSERT INTO trongngay(username,id_Card,salary,working,date) value(?,?,?,?,?)",
    [username, card, salary, paid, date], (err, result) => {
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

module.exports = addDayChange;
