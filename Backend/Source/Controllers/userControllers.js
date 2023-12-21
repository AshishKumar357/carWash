const pool = require("../Config/pool");

const getUsers = async function (request, response) {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      return response.status(400).send(error.message);
    } else if (results.rows.length == 0) {
      return response.status(404).send("No user found");
    } else {
      response.status(200).json(results.rows);
    }
  });
};

const getUserById = async function (request, response) {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      return response.status(400).send(error.message);
    } else if (results.rows.length == 0) {
      return response.status(404).send("No user found");
    } else {
      response.status(200).json(results.rows);
    }
  });
};

const createUser = async function (request, response) {
  const data = request.body;
  // getting unique email
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    data.email,
  ]);
  if (result.rows.length > 0) {
    return response.status(409).send("User already exsits for this email");
  } else {
    pool.query(
      "INSERT INTO users ( firstname,email, lastname,  gender, phonenum) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [data.firstname, data.email, data.lastname, data.gender, data.phonenum],
      (error, results) => {
        if (error) {
          return response.status(400).send(error.message);
        } else if (!response.headersSent) {
          return response.status(201).send(`User ${data.firstname} Created`);
        }
      }
    );
  }
};

const updateUser = async function (request, response) {
  const id = parseInt(request.params.id);
  const data = request.body;
  var i = 1;
  var queParam = [];
  //creating  dynamic update query
  var queryPart1 = "UPDATE users SET ";
  var queryPart2 = "";
  var queryPart3 = "";
  if (data.firstname) {
    queryPart2 = queryPart2.concat("firstname = $" + i++ + ", ");
    queParam.push(data.firstname);
  }
  if (data.lastname) {
    queryPart2 = queryPart2.concat("lastname = $", i++, ", ");
    queParam.push(data.lastname);
  }
  if (data.gender) {
    queryPart2 = queryPart2.concat("gender = $", i++, ", ");
    queParam.push(data.gender);
  }
  // if (data.email) {
  //   queryPart2 = queryPart2.concat("email = $", i++, ", ");
  //   queParam.push(data.email);
  // }
  if (data.phonenum) {
    queryPart2 = queryPart2.concat("phonenum = $", i++, ", ");
    queParam.push(data.phonenum);
  }
  if (data.age) {
    queryPart2 = queryPart2.concat("age = $", i++, ", ");
    queParam.push(data.age);
  }

  queryPart3 = queryPart3.concat(" ", "Where id = $", i++);
  queParam.push(id);

  // finished dynamic SQL query:
  var queryFinal = queryPart1.concat(
    queryPart2.substring(0, queryPart2.length - 2),
    queryPart3
  );

  // console.log(queryFinal.toString() + "\n" + queParam);
  pool.query(queryFinal.toString(), queParam, (error, results) => {
    if (error) {
      try {
        throw error;
      } catch (err) {
        response.send(err.message);
      }
    } else if (!response.headersSent) {
      return response.status(200).send(`User modified with ID: ${id}`);
    }
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
};
