const pool = require("../Config/pool");

//creating method to get all the address
const getAllAddress = (request, response) => {
  const userid = parseInt(request.params.userid);

  pool.query(
    "SELECT * FROM address WHERE userid = $1 ORDER BY ID ASC",
    [userid],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//creating method to get an address
const getAnAddress = (request, response) => {
  const userid = parseInt(request.params.userid);
  const address_type = parseInt(request.params.address_type);

  pool.query(
    "SELECT * FROM address WHERE userid = $1 and address_type = $2",
    [userid, address_type],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//creating a createAddress function to create a new address for a user
const createAddressLink = async function (request, response) {
  const data = request.body;
  // var maxID = 1;
  // //getting the max ID in address table
  // const result = await pool.query("SELECT MAX(id) FROM address");
  // if (result.rows[0].max == null) {
  //   maxID = parseInt(result.rows[0].max) + 1;
  // }

  // console.log(maxID);
  pool.query(
    "Insert into address ( name, first_loa, second_loa, city, state, country, pin) values ($1, $2, $3, $4, $5, $6, $7) RETURNING id",
    [
      data.name,
      data.first_loa,
      data.second_loa,
      //   data.address_type,
      //   data.address,
      data.city,
      data.state,
      data.country,
      data.pin,
    ],
    (error, results) => {
      if (error) {
        throw error;
      } else if (!response.headersSent) {
        console.log(results.rows[0].id);
        //inserting in address_link table to store userid, address_type and addressid
        pool.query(
          "Insert into address_link (user_id, address_type, address_id) values ($1, $2, $3) ",
          [data.userid, data.address_type, results.rows[0].id],
          (error, results) => {
            if (error) {
              throw error;
            } else if (!response.headersSent) {
              return response
                .status(200)
                .send(`Address added for the user : ${data.userid}`);
            }
          }
        );
      }
    }
  );
};

//creating a updateAddress function to update an address for a user
const updateAddress = async function (request, response) {
  const id = parseInt(request.params.id);
  const data = request.body;

  //genrating a dynamic querry
  var i = 1;
  var query = "UPDATE address SET ";
  var queParam = [];
  if (data.name != null) {
    query += "name = $" + i++;
    queParam.push(data.name);
  }
  if (data.first_loa != null) {
    query += ", first_loa = $" + i++;
    queParam.push(data.first_loa);
  }
  if (data.second_loa != null) {
    query += ", second_loa = $" + i++;
    queParam.push(data.second_loa);
  }
  if (data.city != null) {
    query += ", city = $" + i++;
    queParam.push(data.city);
  }
  if (data.state != null) {
    query += ", state = $" + i++;
    queParam.push(data.state);
  }
  if (data.country != null) {
    query += ", country = $" + i++;
    queParam.push(data.country);
  }
  if (data.pin != null) {
    query += ", pin = $" + i++;
    queParam.push(data.pin);
  }
  query += " WHERE id = $" + i++;
  queParam.push(id);
  query += " RETURNING id";
  // console.log(query);
  // console.log(queParam);
  pool.query(query, queParam, (error, results) => {
    if (error) {
      throw error;
    } else if (!response.headersSent) {
      return response
        .status(200)
        .send(`Address modified for the user : ${data.userid}`);
    }
  });
};

module.exports = {
  getAllAddress,
  getAnAddress,
  createAddressLink,
  updateAddress,
};
