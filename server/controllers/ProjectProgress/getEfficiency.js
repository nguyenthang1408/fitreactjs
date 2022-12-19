const db = require('../../model/index.js');

const getEfficiency = (req,res) => {
    
    db.query("SELECT * FROM listuser", 
    (err, result) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    });
}

module.exports = getEfficiency;