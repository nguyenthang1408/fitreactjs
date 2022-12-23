const db = require("../../model/index.js");

const post = (req, res) => {
  const page = req.query.page;
  const search = req.query.search;
  const limit = 5;

  const pageIndexStart = (page - 1) * limit;

  db.query("SELECT COUNT(*) as count FROM user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      const sum = result;
      const sumPage = Math.ceil(parseInt(sum[0].count) / 5);

      db.query(
        `SELECT * FROM user WHERE username like '%${search}%' LIMIT ${pageIndexStart},${limit}`,
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send({ totalPage: sumPage, result });
          }
        }
      );
    }
  });
};

module.exports = post;
