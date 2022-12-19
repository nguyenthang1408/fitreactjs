const db = require('../../model/index.js');

const getProjectSum = (req,res) => {
    
    db.query("SELECT * FROM tiendomaymoc", 
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