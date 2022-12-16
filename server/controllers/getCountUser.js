const db = require("../model/index.js");

const getCountUser = (req,res) => {
    
    db.query("SELECT COUNT(username) as count FROM `listuser`", (err,value) => {
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

module.exports = getCountUser;