const express = require("express");
const router = express.Router();
const db = require("../Controllers/pricingControllers");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const subscriptionValidation = require("../middlewares/Validations");
const { subscriptionSchema } = require("../Models/PriceModels");

// router.post(
//   "/",
//   subscriptionValidation(subscriptionSchema),
//   urlencodedParser,
//   db.createSubscription
// );

module.exports = router;
