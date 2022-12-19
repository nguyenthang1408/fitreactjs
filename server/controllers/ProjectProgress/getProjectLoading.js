const db = require('../../model/index.js');

const getProjectSum = (req,res) => {
    
    db.query("SELECT * FROM tiendomaymoc WHERE tiendo != 100", 
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

module.exports = getProjectSum;