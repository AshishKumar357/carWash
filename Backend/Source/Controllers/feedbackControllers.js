const pool = require("../Config/pool");

const submitFeedback = async function (request, response) {
  const data = request.body;
  pool.query(
    "Insert into feedback ( userid, score, comment) values ($1, $2, $3) returning *",
    [data.userid, data.score, data.comment],
    (error, results) => {
      if (error) {
        return response.status(500).send(`Error: ${error.message}`);
      } else if (!response.headersSent) {
        return response.status(201).send(`Feedback recived. Thank You!`);
      }
    }
  );
};

module.exports = submitFeedback;
