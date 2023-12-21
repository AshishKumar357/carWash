const pool = require("../Config/pool");

const getAllPrice = (request, response) => {
  pool.query("SELECT * FROM pricing ORDER BY ID ASC", (error, results) => {
    if (error) {
      return response.status(400).send(error.message);
    } else if (results.rows.length == 0) {
      return response.status(404).send("No rate cards found");
    } else {
      return response.status(200).json(results.rows);
    }
  });
};

const getPriceById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM pricing WHERE ID = $1", [id], (error, results) => {
    if (error) {
      return response.status(400).send(error.message);
    } else if (results.rows.length == 0) {
      return response.status(404).send("No rate cards found for the ID: ", id);
    } else {
      return response.status(200).json(results.rows);
    }
  });
};

const getPriceByValue = (request, response) => {
  const serviceType = parseInt(request.params.serviceType);
  const subDuration = parseInt(request.params.subDuration);

  pool.query(
    "SELECT * FROM pricing WHERE servicetype = $1 and subduration = $2",
    [serviceType, subDuration],
    (error, results) => {
      if (error) {
        return response.status(400).send(error.message);
      } else if (results.rows.length == 0) {
        return response
          .status(404)
          .send(
            "No rate cards found for the service type: ",
            serviceType,
            " and sub duration: ",
            subDuration
          );
      } else return response.status(200).json(results.rows);
    }
  );
};

//creating a createPrice function to create a new price
const createPrice = async function (request, response) {
  const data = request.body;

  pool.query(
    "Insert into pricing ( price, servicetype, servicetype_cd, subduration, subduration_cd, discounts) values ($1, $2, $3, $4, $5, $6) RETURNING id",
    [
      data.price,
      data.servicetype,
      data.servicetype_cd,
      data.subduration,
      data.subduration_cd,
      data.discounts,
    ],
    (error, results) => {
      if (error) {
        return response.status(400).send(error.message);
      } else if (!response.headersSent) {
        // if doesn't sent yet
        return response
          .status(201)
          .send(`Rate Card ID: ${results.rows[0].id} Created`);
      }
    }
  );
};

//creating a updatePrice function to update a price
const updatePrice = async function (request, response) {
  const id = parseInt(request.params.id);
  const data = request.body;
  var i = 1;
  var queParam = [];

  //creating update query
  var queryPart1 = "UPDATE pricing SET ";
  var queryPart2 = "";
  var queryPart3 = "";
  if (data.price) {
    queryPart2 = queryPart2.concat("price = $" + i++ + ", ");
    queParam.push(data.price);
  }
  if (data.servicetype) {
    queryPart2 = queryPart2.concat("servicetype = $", i++, ", ");
    queParam.push(data.servicetype);
  }
  if (data.servicetype_cd) {
    queryPart2 = queryPart2.concat("servicetype_cd = $", i++, ", ");
    queParam.push(data.servicetype_cd);
  }
  if (data.subduration) {
    queryPart2 = queryPart2.concat("subduration = $", i++, ", ");
    queParam.push(data.subduration);
  }
  if (data.subduration_cd) {
    queryPart2 = queryPart2.concat("subduration_cd = $", i++, ", ");
    queParam.push(data.subduration_cd);
  }
  if (data.discounts) {
    queryPart2 = queryPart2.concat("discounts = $", i++, ", ");
    queParam.push(data.discounts);
  }

  queryPart3 = queryPart3.concat(" ", "Where id = $", i++);
  queParam.push(id);

  // finished dynamic SQL query:
  var queryFinal = queryPart1.concat(
    queryPart2.substring(0, queryPart2.length - 2),
    queryPart3
  );
  //logging the query
  console.log(queryFinal.toString() + "\n" + queParam);
  //pooling the querry
  pool.query(queryFinal.toString(), queParam, (error, results) => {
    console.log(results);
    if (error) {
      return response.status(400).send(error.message);
    } else if (!response.headersSent)
      return response.status(200).send(`Price card for  ID: ${id} modified`);
  });
};

module.exports = {
  getAllPrice,
  getPriceById,
  getPriceByValue,
  createPrice,
  updatePrice,
};
