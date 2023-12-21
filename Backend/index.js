const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
const userRoutes = require("./Source/Routes/UserRoutes");
const priceRoutes = require("./Source/Routes/PriceRoutes");
const addressRoutes = require("./Source/Routes/AddressRoutes");
const feedbackRoutes = require("./Source/Routes/FeedbackRoutes");
const subscriptionRoutes = require("./Source/Routes/SubscribeRoutes");
const dotenv = require("dotenv");
dotenv.config();

const {
  notFound,
  errorHandler,
} = require("./Source/middlewares/errorMiddleware");

const port = process.env.port || 5005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use("/users", userRoutes);
app.use("/price", priceRoutes);
app.use("/address", addressRoutes);
// app.use("/subscribe", subscriptionRoutes);
app.use("/feedback", feedbackRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.use(notFound);
app.use(errorHandler);
